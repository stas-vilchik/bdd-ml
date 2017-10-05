{
  if (node instanceof HTMLShadowElement) return node;
  if (node instanceof HTMLContentElement) return null;

  for (var child = node.firstChild; child; child = child.nextSibling) {
    var res = getShadowInsertionPoint(child);
    if (res) return res;
  }

  return null;
}
