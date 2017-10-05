{
  assert.equal(this.x, 0);
  assert.equal(super.x++, 0);
  assert.equal(this.x, 1);
  assert.equal(super.x--, 1);
  assert.equal(this.x, 0);
}