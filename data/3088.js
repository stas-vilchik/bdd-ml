{
  var copy = {};

  for (var k in node) {
    if (node.hasOwnProperty(k))
      switch (k) {
        case "children":
          copy.children = node.children.map(noparent);
          break;

        case "parent":
          break;

        default:
          copy[k] = node[k];
          break;
      }
  }

  return copy;
}
