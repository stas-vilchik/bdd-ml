{
  var rv = unsafeUnwrap(this).toggle.apply(unsafeUnwrap(this), arguments);
  invalidateClass(this.ownerElement_);
  return rv;
}
