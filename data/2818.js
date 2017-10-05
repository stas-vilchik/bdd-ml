{
  if (this.left) {
    yield* this.left;
  }

  yield this.label;

  if (this.right) {
    yield* this.right;
  }
}