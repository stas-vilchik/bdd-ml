{
  if (this.addCallback) {
    this.addCallback(nodes);
  }

  for (var i = 0, l = nodes.length, n, loading; i < l && (n = nodes[i]); i++) {
    if (n.children && n.children.length) {
      this.addedNodes(n.children);
    }
  }
}
