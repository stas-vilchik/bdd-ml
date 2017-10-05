{
  if (node.type === "Literal" && typeof node.value === "string") {
    return node.value;
  } else if (node.type === "BinaryExpression" && node.operator === "+") {
    var l = getLiteralString(node.left);
    var r = getLiteralString(node.right);

    if (l !== null && r !== null) {
      return l + r;
    }
  }

  return null;
}
