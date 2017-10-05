{
  if (context.getFilename().indexOf("packages/babel-plugin-") === -1) {
    return {};
  }

  return {
    CallExpression: function(node) {
      const callee = node.callee;

      if (
        callee.type === "MemberExpression" &&
        argumentsIsUndefinedString(node.arguments)
      ) {
        const object = callee.object,
          property = callee.property;

        if (
          object.type === "Identifier" &&
          object.name === "t" &&
          property.type === "Identifier" &&
          property.name === "identifier"
        ) {
          context.report(
            node,
            "Use path.scope.buildUndefinedNode() to create an undefined identifier directly."
          );
        }
      }
    }
  };
}
