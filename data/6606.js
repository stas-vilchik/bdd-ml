{
  if (node instanceof DocumentFragment) {
    var nodes = collectNodesForDocumentFragment(node);
    surpressMutations = true;

    for (var i = nodes.length - 1; i >= 0; i--) {
      node.removeChild(nodes[i]);
      nodes[i].parentNode_ = parentNode;
    }

    surpressMutations = false;

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].previousSibling_ = nodes[i - 1] || previousNode;
      nodes[i].nextSibling_ = nodes[i + 1] || nextNode;
    }

    if (previousNode) previousNode.nextSibling_ = nodes[0];
    if (nextNode) nextNode.previousSibling_ = nodes[nodes.length - 1];
    return nodes;
  }

  var nodes = createOneElementNodeList(node);
  var oldParent = node.parentNode;

  if (oldParent) {
    oldParent.removeChild(node);
  }

  node.parentNode_ = parentNode;
  node.previousSibling_ = previousNode;
  node.nextSibling_ = nextNode;
  if (previousNode) previousNode.nextSibling_ = node;
  if (nextNode) nextNode.previousSibling_ = node;
  return nodes;
}
