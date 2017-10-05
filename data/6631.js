{
  return this.parentNode_ !== undefined
    ? this.parentNode_
    : wrap(unsafeUnwrap(this).parentNode);
}
