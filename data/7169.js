{
  if (node.shadowRoot && !node.shadowRoot.__watched) {
    flags.dom && console.log("watching shadow-root for: ", node.localName);
    var root = node.shadowRoot;

    while (root) {
      observe(root);
      root = root.olderShadowRoot;
    }
  }
}
