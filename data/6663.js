{
  while (node && node.nodeType !== Node.ELEMENT_NODE) {
    node = node.nextSibling;
  }

  return node;
}
