{
  function isConstant(node) {
    switch (node.type) {
      case "SequenceExpression":
        return isConstant(node.expressions[node.expressions.length - 1]);
    }

    return false;
  }
}
