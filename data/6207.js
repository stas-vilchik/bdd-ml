{
  const callee = astPath.get("callee");

  if (
    callee.isIdentifier({
      name: "warning"
    }) ||
    callee.isIdentifier({
      name: "lowPriorityWarning"
    })
  ) {
    const node = astPath.node;
    const warningMsgLiteral = evalToString(node.arguments[1]);
    warnings.add(JSON.stringify(warningMsgLiteral));
  }
}
