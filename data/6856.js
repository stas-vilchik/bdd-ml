{
  var root = getTreeScope(node).root;
  if (root instanceof ShadowRoot) return root;
  return null;
}
