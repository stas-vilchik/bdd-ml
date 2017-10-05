{
  var stack = [];

  while (node) {
    while (node.left) {
      stack.push(node);
      node = node.left;
    }

    yield node.label;

    while (!node.right && stack.length) {
      node = stack.pop();
      yield node.label;
    }

    node = node.right;
  }
}