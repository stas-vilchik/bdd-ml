{
  for (var child = node.firstChild; child; child = child.nextSibling) {
    this.resetAll(child);
  }

  if (node.shadowRoot) this.resetAll(node.shadowRoot);
  if (node.olderShadowRoot) this.resetAll(node.olderShadowRoot);
}
