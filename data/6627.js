{
  assertIsNodeWrapper(childWrapper);

  if (childWrapper.parentNode !== this) {
    var found = false;
    var childNodes = this.childNodes;

    for (
      var ieChild = this.firstChild;
      ieChild;
      ieChild = ieChild.nextSibling
    ) {
      if (ieChild === childWrapper) {
        found = true;
        break;
      }
    }

    if (!found) {
      throw new Error("NotFoundError");
    }
  }

  var childNode = unwrap(childWrapper);
  var childWrapperNextSibling = childWrapper.nextSibling;
  var childWrapperPreviousSibling = childWrapper.previousSibling;

  if (this.invalidateShadowRenderer()) {
    var thisFirstChild = this.firstChild;
    var thisLastChild = this.lastChild;
    var parentNode = childNode.parentNode;
    if (parentNode) removeChildOriginalHelper(parentNode, childNode);
    if (thisFirstChild === childWrapper)
      this.firstChild_ = childWrapperNextSibling;
    if (thisLastChild === childWrapper)
      this.lastChild_ = childWrapperPreviousSibling;
    if (childWrapperPreviousSibling)
      childWrapperPreviousSibling.nextSibling_ = childWrapperNextSibling;

    if (childWrapperNextSibling) {
      childWrapperNextSibling.previousSibling_ = childWrapperPreviousSibling;
    }

    childWrapper.previousSibling_ = childWrapper.nextSibling_ = childWrapper.parentNode_ = undefined;
  } else {
    clearChildNodes(this);
    removeChildOriginalHelper(unsafeUnwrap(this), childNode);
  }

  if (!surpressMutations) {
    enqueueMutation(this, "childList", {
      removedNodes: createOneElementNodeList(childWrapper),
      nextSibling: childWrapperNextSibling,
      previousSibling: childWrapperPreviousSibling
    });
  }

  registerTransientObservers(this, childWrapper);
  return childWrapper;
}
