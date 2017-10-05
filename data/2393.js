{
  assert.equal(this, self);
  var value = await asyncComplete(this, arguments[0]);
  assert.deepEqual([self, obj], value);
  done();
}