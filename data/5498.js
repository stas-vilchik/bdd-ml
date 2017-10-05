{
  function report(node, name, msg) {
    context.report(node, `Do not use the ${name} constructor. ${msg}`);
  }

  function check(node) {
    const name = node.callee.name;

    switch (name) {
      case "Boolean":
        report(
          node,
          name,
          "To cast a value to a boolean, use double negation: !!value"
        );
        break;

      case "String":
        report(
          node,
          name,
          "To cast a value to a string, concat it with the empty string " +
            "(unless it's a symbol, which has different semantics): " +
            "'' + value"
        );
        break;

      case "Number":
        report(
          node,
          name,
          "To cast a value to a number, use the plus operator: +value"
        );
        break;
    }
  }

  return {
    CallExpression: check,
    NewExpression: check
  };
}
