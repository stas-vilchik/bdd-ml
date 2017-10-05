{
  visit(markdownAST, `code`, node => {
    if (typeof node.lang !== "string") {
      return;
    }

    if (node.lang.indexOf("jsx") === 0) {
      return;
    }

    if (node.lang.indexOf("js") === 0) {
      node.lang = "jsx" + node.lang.substring("js".length);
    }

    if (node.lang.indexOf("javascript") === 0) {
      node.lang = "jsx" + node.lang.substring("javascript".length);
    }
  });
}
