{
  var value = await asyncValue(42);
  assert.equal(42, value);
  done();
}