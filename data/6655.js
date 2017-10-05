{
  var shimmed = shimSelector(selector);
  var deep = shimmed !== selector;
  selector = shimmed;
  var target = unsafeUnwrap(this);
  var wrappedItem;
  var root = getTreeScope(this).root;

  if (root instanceof scope.wrappers.ShadowRoot) {
    return findOne(this, selector);
  } else if (target instanceof OriginalElement) {
    wrappedItem = wrap(originalElementQuerySelector.call(target, selector));
  } else if (target instanceof OriginalDocument) {
    wrappedItem = wrap(originalDocumentQuerySelector.call(target, selector));
  } else {
    return findOne(this, selector);
  }

  if (!wrappedItem) {
    return wrappedItem;
  } else if (!deep && (root = getTreeScope(wrappedItem).root)) {
    if (root instanceof scope.wrappers.ShadowRoot) {
      return findOne(this, selector);
    }
  }

  return wrappedItem;
}
