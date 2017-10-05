{
  const postPieces = String(fs.readFileSync(path.join(blogFolder, file))).split(
    "---"
  );
  const header = postPieces[1];
  const post = postPieces.slice(2).join("---");
  const indexOfTruncate = post.indexOf("<!--truncate-->");
  const postExcerpt =
    indexOfTruncate === -1
      ? post.replace(/\n\r/g, "\n").split(".\n\n")[0]
      : post.substring(0, indexOfTruncate);
  return header
    .split(os.EOL)
    .filter(x => x)
    .reduce(
      (metadata, str) => {
        const matches = /(.*?): (.*)/.exec(str);
        metadata[matches[1]] = matches[2];
        return metadata;
      },
      {
        url: getURLFromFile(file),
        description: postExcerpt
      }
    );
}
