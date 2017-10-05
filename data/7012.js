{
  if (
    node.localName === "link" &&
    node.rel === "stylesheet" &&
    node.hasAttribute(SHIM_ATTRIBUTE)
  ) {
    return node.__resource;
  } else {
    return hasResource.call(this, node);
  }
}
