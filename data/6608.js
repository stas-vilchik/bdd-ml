{
  var nodes = new NodeList();
  var i = 0;

  for (var child = node.firstChild; child; child = child.nextSibling) {
    nodes[i++] = child;
  }

  nodes.length = i;
  enqueueRemovalForInsertedDocumentFragment(node, nodes);
  return nodes;
}
