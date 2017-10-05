{
  assert(parentNodeWrapper instanceof Node);

  for (
    var childWrapper = parentNodeWrapper.firstChild;
    childWrapper;
    childWrapper = childWrapper.nextSibling
  ) {
    updateWrapperUpAndSideways(childWrapper);
  }

  updateWrapperDown(parentNodeWrapper);
}
