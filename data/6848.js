{
  var parentNode = unwrap(parentNodeWrapper);
  var newChild = unwrap(newChildWrapper);
  var refChild = refChildWrapper ? unwrap(refChildWrapper) : null;
  remove(newChildWrapper);
  updateWrapperUpAndSideways(newChildWrapper);

  if (!refChildWrapper) {
    parentNodeWrapper.lastChild_ = parentNodeWrapper.lastChild;
    if (parentNodeWrapper.lastChild === parentNodeWrapper.firstChild)
      parentNodeWrapper.firstChild_ = parentNodeWrapper.firstChild;
    var lastChildWrapper = wrap(parentNode.lastChild);
    if (lastChildWrapper)
      lastChildWrapper.nextSibling_ = lastChildWrapper.nextSibling;
  } else {
    if (parentNodeWrapper.firstChild === refChildWrapper)
      parentNodeWrapper.firstChild_ = refChildWrapper;
    refChildWrapper.previousSibling_ = refChildWrapper.previousSibling;
  }

  scope.originalInsertBefore.call(parentNode, newChild, refChild);
}
