{
  var treeScope = getTreeScope(parent);

  for (var i = 0; i < nodes.length; i++) {
    nodeWasAdded(nodes[i], treeScope);
  }
}
