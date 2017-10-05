{
  var target = unsafeUnwrap(this);
  var list;
  var root = getTreeScope(this).root;

  if (root instanceof scope.wrappers.ShadowRoot) {
    return findElements(this, index, result, p, localName, lowercase);
  } else if (target instanceof OriginalElement) {
    list = originalElementGetElementsByTagName.call(
      target,
      localName,
      lowercase
    );
  } else if (target instanceof OriginalDocument) {
    list = originalDocumentGetElementsByTagName.call(
      target,
      localName,
      lowercase
    );
  } else {
    return findElements(this, index, result, p, localName, lowercase);
  }

  return filterNodeList(list, index, result, false);
}
