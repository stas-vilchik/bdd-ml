{
  if (node instanceof scope.wrappers.Window) {
    debugger;
  }

  if (node.treeScope_) return node.treeScope_;
  var parent = node.parentNode;
  var treeScope;
  if (parent) treeScope = getTreeScope(parent);
  else treeScope = new TreeScope(node, null);
  return (node.treeScope_ = treeScope);
}
