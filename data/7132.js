{
  var doc = node.ownerDocument || node;
  return doc === rootDocument
    ? this.documentPreloadSelectors
    : this.importsPreloadSelectors;
}
