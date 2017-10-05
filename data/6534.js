{
  if (currentTarget instanceof wrappers.Window)
    currentTarget = currentTarget.document;
  var currentTargetTree = getTreeScope(currentTarget);
  var relatedTargetTree = getTreeScope(relatedTarget);
  var relatedTargetEventPath = getEventPath(relatedTarget, event);
  var lowestCommonAncestorTree;
  var lowestCommonAncestorTree = lowestCommonInclusiveAncestor(
    currentTargetTree,
    relatedTargetTree
  );
  if (!lowestCommonAncestorTree)
    lowestCommonAncestorTree = relatedTargetTree.root;

  for (
    var commonAncestorTree = lowestCommonAncestorTree;
    commonAncestorTree;
    commonAncestorTree = commonAncestorTree.parent
  ) {
    var adjustedRelatedTarget;

    for (var i = 0; i < relatedTargetEventPath.length; i++) {
      var node = relatedTargetEventPath[i];
      if (getTreeScope(node) === commonAncestorTree) return node;
    }
  }

  return null;
}
