{
  var node = path.node;

  if (node[SEEN_SYMBOL]) {
    return;
  }

  if (
    path.get("callee").isIdentifier({
      name: "warning"
    })
  ) {
    node[SEEN_SYMBOL] = true;
    path.replaceWith(
      t.ifStatement(
        DEV_EXPRESSION,
        t.blockStatement([t.expressionStatement(node)])
      )
    );
  }
}
