{
  return this.nextSibling_ !== undefined
    ? this.nextSibling_
    : wrap(unsafeUnwrap(this).nextSibling);
}
