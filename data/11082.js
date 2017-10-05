{
  this.isString = true;
  this.open = open;
  this.close = close;

  if (children) {
    this.children =
      normalizationType === 1
        ? simpleNormalizeChildren(children)
        : normalizationType === 2 ? normalizeChildren(children) : children;
  } else {
    this.children = void 0;
  }
}
