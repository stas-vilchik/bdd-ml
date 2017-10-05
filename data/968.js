{
  return {
    visitor: {
      Program: function(path) {
        path.pushContainer("body", [
          babel.types.expressionStatement(babel.types.identifier(str))
        ]);
      }
    }
  };
}
