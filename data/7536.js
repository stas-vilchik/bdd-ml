{
  while (node && node.firstChild) {
    node = node.firstChild;
  }

  return node;
}
