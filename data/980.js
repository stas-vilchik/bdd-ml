{
  var t = b.types;
  return {
    visitor: {
      ConditionalExpression: function(path) {
        path.get("test").evaluateTruthy();
      }
    }
  };
}
