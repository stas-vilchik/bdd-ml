{
  var target = unsafeUnwrap(this);
  var list;
  var root = getTreeScope(this).root;

  if (root instanceof scope.wrappers.ShadowRoot) {
    return findElements(this, index, result, p, ns, localName);
  } else if (target instanceof OriginalElement) {
    list = originalElementGetElementsByTagNameNS.call(target, ns, localName);
  } else if (target instanceof OriginalDocument) {
    list = originalDocumentGetElementsByTagNameNS.call(target, ns, localName);
  } else {
    return findElements(this, index, result, p, ns, localName);
  }

  return filterNodeList(list, index, result, false);
}
