{
  return this.lastChild_ !== undefined
    ? this.lastChild_
    : wrap(unsafeUnwrap(this).lastChild);
}
