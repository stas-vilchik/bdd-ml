{
  var t = b.types;
  return {
    visitor: {
      BinaryExpression: function(path) {
        path.get("left").baseTypeStrictlyMatches(path.get("right"));
      }
    }
  };
}
