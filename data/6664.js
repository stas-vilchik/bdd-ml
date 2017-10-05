{
  while (node && node.nodeType !== Node.ELEMENT_NODE) {
    node = node.previousSibling;
  }

  return node;
}
