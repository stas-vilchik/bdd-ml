{
  const metadatas = {
    files: []
  };
  files
    .sort()
    .reverse()
    .forEach(file => {
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
    });
  const perPage = 10;

  for (
    let page = 0;
    page < Math.ceil(metadatas.files.length / perPage);
    ++page
  ) {
    writeFileAndCreateFolder(
      "src/jest/blog" + (page > 0 ? "/page" + (page + 1) : "") + "/index.js",
      buildFile("BlogPageLayout", {
        page,
        perPage
      })
    );
  }

  fs.writeFileSync(
    "core/metadata-blog.js",
    "/**\n" +
      " * @generated\n" +
      " * @providesModule MetadataBlog\n" +
      " */\n" +
      "module.exports = " +
      JSON.stringify(metadatas, null, 2) +
      ";"
  );
}
