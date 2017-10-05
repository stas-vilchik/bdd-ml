{
  if (
    !path.get("callee").isIdentifier({
      name: "require"
    }) ||
    path.get("arguments").length !== 1 ||
    !path.get("arguments")[0].isStringLiteral()
  ) {
    return;
  }

  path.get("arguments")[0].node.value = path
    .get("arguments")[0]
    .node.value.replace(/^babel-runtime/, relativePath);
}
