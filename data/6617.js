{
  if (wrapper.invalidateShadowRenderer()) {
    var childWrapper = wrapper.firstChild;

    while (childWrapper) {
      assert(childWrapper.parentNode === wrapper);
      var nextSibling = childWrapper.nextSibling;
      var childNode = unwrap(childWrapper);
      var parentNode = childNode.parentNode;
      if (parentNode) originalRemoveChild.call(parentNode, childNode);
      childWrapper.previousSibling_ = childWrapper.nextSibling_ = childWrapper.parentNode_ = null;
      childWrapper = nextSibling;
    }

    wrapper.firstChild_ = wrapper.lastChild_ = null;
  } else {
    var node = unwrap(wrapper);
    var child = node.firstChild;
    var nextSibling;

    while (child) {
      nextSibling = child.nextSibling;
      originalRemoveChild.call(node, child);
      child = nextSibling;
    }
  }
}
