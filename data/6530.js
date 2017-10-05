{
  if (path.length === 0) return currentTarget;
  if (currentTarget instanceof wrappers.Window)
    currentTarget = currentTarget.document;
  var currentTargetTree = getTreeScope(currentTarget);
  var originalTarget = path[0];
  var originalTargetTree = getTreeScope(originalTarget);
  var relativeTargetTree = lowestCommonInclusiveAncestor(
    currentTargetTree,
    originalTargetTree
  );

  for (var i = 0; i < path.length; i++) {
    var node = path[i];
    if (getTreeScope(node) === relativeTargetTree) return node;
  }

  return path[path.length - 1];
}
