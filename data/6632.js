{
  return this.firstChild_ !== undefined
    ? this.firstChild_
    : wrap(unsafeUnwrap(this).firstChild);
}
