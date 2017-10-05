{
  return this.previousSibling_ !== undefined
    ? this.previousSibling_
    : wrap(unsafeUnwrap(this).previousSibling);
}
