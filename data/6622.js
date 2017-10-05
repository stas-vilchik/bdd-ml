{
  assert(original instanceof OriginalNode);
  EventTarget.call(this, original);
  this.parentNode_ = undefined;
  this.firstChild_ = undefined;
  this.lastChild_ = undefined;
  this.nextSibling_ = undefined;
  this.previousSibling_ = undefined;
  this.treeScope_ = undefined;
}
