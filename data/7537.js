{
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }

    node = node.parentNode;
  }
}
