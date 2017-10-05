{
  var node = unwrap(
    unsafeUnwrap(hostWrapper).ownerDocument.createDocumentFragment()
  );
  DocumentFragment.call(this, node);
  rewrap(node, this);
  var oldShadowRoot = hostWrapper.shadowRoot;
  nextOlderShadowTreeTable.set(this, oldShadowRoot);
  this.treeScope_ = new TreeScope(
    this,
    getTreeScope(oldShadowRoot || hostWrapper)
  );
  shadowHostTable.set(this, hostWrapper);
}
