{
  var t = babel.types;
  var SEEN_SYMBOL = Symbol("replace-invariant-error-codes.seen");

  function getProdInvariantIdentifier(path, localState) {
    if (!localState.prodInvariantIdentifier) {
      localState.prodInvariantIdentifier = path.scope.generateUidIdentifier(
        "prodInvariant"
      );
      path.scope.getProgramParent().push({
        id: localState.prodInvariantIdentifier,
        init: t.callExpression(t.identifier("require"), [
          t.stringLiteral("reactProdInvariant")
        ])
      });
    }

    return localState.prodInvariantIdentifier;
  }

  var DEV_EXPRESSION = t.identifier("__DEV__");
  return {
    pre: function() {
      this.prodInvariantIdentifier = null;
    },
    visitor: {
      CallExpression: {
        exit: function(path) {
          var node = path.node;

          if (node[SEEN_SYMBOL]) {
            return;
          }

          if (
            path.get("callee").isIdentifier({
              name: "require"
            }) &&
            path.get("arguments")[0] &&
            path.get("arguments")[0].isStringLiteral({
              value: "invariant"
            })
          ) {
            node[SEEN_SYMBOL] = true;
            getProdInvariantIdentifier(path, this);
          } else if (
            path.get("callee").isIdentifier({
              name: "invariant"
            })
          ) {
            var condition = node.arguments[0];
            var errorMsgLiteral = evalToString(node.arguments[1]);
            var prodErrorId = errorMap[errorMsgLiteral];

            if (prodErrorId === undefined) {
              node[SEEN_SYMBOL] = true;
              return;
            }

            var devInvariant = t.callExpression(
              node.callee,
              [
                t.booleanLiteral(false),
                t.stringLiteral(errorMsgLiteral)
              ].concat(node.arguments.slice(2))
            );
            devInvariant[SEEN_SYMBOL] = true;
            var localInvariantId = getProdInvariantIdentifier(path, this);
            var prodInvariant = t.callExpression(
              localInvariantId,
              [t.stringLiteral(prodErrorId)].concat(node.arguments.slice(2))
            );
            prodInvariant[SEEN_SYMBOL] = true;
            path.replaceWith(
              t.ifStatement(
                t.unaryExpression("!", condition),
                t.blockStatement([
                  t.ifStatement(
                    DEV_EXPRESSION,
                    t.blockStatement([t.expressionStatement(devInvariant)]),
                    t.blockStatement([t.expressionStatement(prodInvariant)])
                  )
                ])
              )
            );
          }
        }
      }
    }
  };
}
