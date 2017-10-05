{
  if (node instanceof DocumentFragment)
    return collectNodesForDocumentFragment(node);
  var nodes = createOneElementNodeList(node);
  var oldParent = node.parentNode;
  if (oldParent) enqueueRemovalForInsertedNodes(node, oldParent, nodes);
  return nodes;
}
