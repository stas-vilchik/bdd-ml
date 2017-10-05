{
  const filePath = path
    .basename(file)
    .replace("-", "/")
    .replace("-", "/")
    .replace("-", "/")
    .replace(/\./g, "-")
    .replace(/\-md$/, ".html");
  const res = extractMetadata(
    fs.readFileSync(file, {
      encoding: "utf8"
    })
  );
  const rawContent = res.rawContent;
  const metadata = Object.assign(
    {
      path: filePath,
      content: rawContent
    },
    res.metadata
  );
  metadata.id = metadata.title;
  metadatas.files.push(metadata);
  writeFileAndCreateFolder(
    "src/jest/blog/" + filePath.replace(/\.html$/, ".js"),
    buildFile("BlogPostLayout", metadata, rawContent)
  );
}
