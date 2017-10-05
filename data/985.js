{
  if (path.node.seen) {
    return;
  }

  var node = t.blockStatement(path.node.body);
  node.seen = true;
  path.replaceWith(node);
}
