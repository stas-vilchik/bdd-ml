{
  var value =
    node.type === 3
      ? node.text
      : node.type === 2
        ? node.tokens.length === 1 ? node.tokens[0] : node.tokens
        : "";
  return JSON.stringify(value);
}
