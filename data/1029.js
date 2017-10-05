{
  (() => {
    assert.strictEqual(this.constructor, Bar);
  })();

  (() => {
    assert.strictEqual(this.constructor, Bar);
  }).call(this);

  (async () => {
    assert.strictEqual(this.constructor, Bar);
  })();

  (async () => {
    assert.strictEqual(this.constructor, Bar);
  }).call(this);
}
