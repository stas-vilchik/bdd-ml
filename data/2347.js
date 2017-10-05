{
  var values = [].slice.call(arguments, 1);
  assert.equal(strings[0], "");
  assert.equal(strings[1], "b");
  assert.equal(values[0], 42);
  return "whatever";
}
