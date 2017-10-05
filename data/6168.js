{
  var ast = babylon.parse(source, babylonOptions);
  traverse(ast, {
    CallExpression: {
      exit: function(astPath) {
        if (
          astPath.get("callee").isIdentifier({
            name: "invariant"
          })
        ) {
          var node = astPath.node;
          var errorMsgLiteral = evalToString(node.arguments[1]);

          if (existingErrorMap.hasOwnProperty(errorMsgLiteral)) {
            return;
          }

          existingErrorMap[errorMsgLiteral] = "" + currentID++;
        }
      }
    }
  });
}
