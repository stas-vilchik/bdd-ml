{
  var ancestors = [];

  for (; treeScope; treeScope = treeScope.parent) {
    ancestors.push(treeScope);
  }

  return ancestors;
}
