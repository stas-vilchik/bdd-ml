{
  var target = unsafeUnwrap(this);
  var list;
  var root = getTreeScope(this).root;

  if (root instanceof scope.wrappers.ShadowRoot) {
    return findElements(this, index, result, p, selector, null);
  } else if (target instanceof OriginalElement) {
    list = originalElementQuerySelectorAll.call(target, selector);
  } else if (target instanceof OriginalDocument) {
    list = originalDocumentQuerySelectorAll.call(target, selector);
  } else {
    return findElements(this, index, result, p, selector, null);
  }

  return filterNodeList(list, index, result, deep);
}
