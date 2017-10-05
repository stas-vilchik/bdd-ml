{
  var root = node.shadowRoot;

  while (root) {
    forSubtree(root, cb);
    root = root.olderShadowRoot;
  }
}
