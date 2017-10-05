{
  var doc = node.ownerDocument || node;
  return doc === rootDocument ? this.documentSelectors : this.importsSelectors;
}
