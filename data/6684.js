{
  unsafeUnwrap(this).add.apply(unsafeUnwrap(this), arguments);
  invalidateClass(this.ownerElement_);
}
