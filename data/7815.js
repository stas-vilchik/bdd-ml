{
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
}
