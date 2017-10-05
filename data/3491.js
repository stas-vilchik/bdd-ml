{
  state.tokens
    .filter(o => "h1 h2 h3 h4 h5 h6".split(" ").indexOf(o.tag) > -1)
    .forEach(token => {
      const level = token.tag.split("")[1];
      const className =
        level === 1
          ? "markdown-heading"
          : "markdown-heading markdown-toc-heading";
      token.attrs = [["class", className]];
    });
}
