{
  if (!inst || !inst.getPublicInstance) {
    return [];
  }

  var publicInst = inst.getPublicInstance();
  var ret = test(publicInst) ? [publicInst] : [];
  var currentElement = inst._currentElement;

  if (ReactTestUtils.isDOMComponent(publicInst)) {
    var renderedChildren = inst._renderedChildren;
    var key;

    for (key in renderedChildren) {
      if (!renderedChildren.hasOwnProperty(key)) {
        continue;
      }

      ret = ret.concat(
        findAllInRenderedStackTreeInternal(renderedChildren[key], test)
      );
    }
  } else if (
    React.isValidElement(currentElement) &&
    typeof currentElement.type === "function"
  ) {
    ret = ret.concat(
      findAllInRenderedStackTreeInternal(inst._renderedComponent, test)
    );
  }

  return ret;
}
