{
  var t = babel.types;
  var DEV_EXPRESSION = t.identifier("__DEV__");
  var SEEN_SYMBOL = Symbol("expression.seen");
  return {
    visitor: {
      CallExpression: {
        exit: function(path) {
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
      }
    }
  };
}
