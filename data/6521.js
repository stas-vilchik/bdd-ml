{
  if (node.treeScope_ !== treeScope) {
    node.treeScope_ = treeScope;

    for (var sr = node.shadowRoot; sr; sr = sr.olderShadowRoot) {
      sr.treeScope_.parent = treeScope;
    }

    for (var child = node.firstChild; child; child = child.nextSibling) {
      setTreeScope(child, treeScope);
    }
  }
}
