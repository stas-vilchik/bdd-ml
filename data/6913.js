{
  if (node.shadowRoot) doc.adoptNode(node.shadowRoot);
  if (node instanceof ShadowRoot) adoptOlderShadowRoots(node, doc);

  for (var child = node.firstChild; child; child = child.nextSibling) {
    adoptSubtree(child, doc);
  }
}
