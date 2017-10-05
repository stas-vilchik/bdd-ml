{
  const level = token.tag.split("")[1];
  const className =
    level === 1 ? "markdown-heading" : "markdown-heading markdown-toc-heading";
  token.attrs = [["class", className]];
}
