{
  var node = unwrap(nodeWrapper);
  var parentNode = node.parentNode;
  if (!parentNode) return;
  var parentNodeWrapper = wrap(parentNode);
  updateWrapperUpAndSideways(nodeWrapper);
  if (nodeWrapper.previousSibling)
    nodeWrapper.previousSibling.nextSibling_ = nodeWrapper;
  if (nodeWrapper.nextSibling)
    nodeWrapper.nextSibling.previousSibling_ = nodeWrapper;
  if (parentNodeWrapper.lastChild === nodeWrapper)
    parentNodeWrapper.lastChild_ = nodeWrapper;
  if (parentNodeWrapper.firstChild === nodeWrapper)
    parentNodeWrapper.firstChild_ = nodeWrapper;
  scope.originalRemoveChild.call(parentNode, node);
}
