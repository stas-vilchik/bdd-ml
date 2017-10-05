{
  unsafeUnwrap(this).remove.apply(unsafeUnwrap(this), arguments);
  invalidateClass(this.ownerElement_);
}
