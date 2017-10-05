{
  const { createNode } = boundActionCreators;
  const path = resolve(__dirname, "../../../docs/_data/authors.yml");
  const file = readFileSync(path, "utf8");
  const authors = safeLoad(file);
  Object.keys(authors).forEach(username => {
    const author = authors[username];
    createNode({
      id: username,
      children: [],
      parent: "AUTHORS",
      internal: {
        type: "AuthorYaml",
        contentDigest: JSON.stringify(author)
      },
      frontmatter: author
    });
  });
}
