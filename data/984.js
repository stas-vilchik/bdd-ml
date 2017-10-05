{
  var t = b.types;
  return {
    visitor: {
      BlockStatement: function(path) {
        if (path.node.seen) {
          return;
        }

        var node = t.blockStatement(path.node.body);
        node.seen = true;
        path.replaceWith(node);
      },
      BinaryExpression: function(path) {
        var left = path.get("left");
        var right = path.get("right");
        left.baseTypeStrictlyMatches(right);
      }
    }
  };
}
