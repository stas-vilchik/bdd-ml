{
  var x = 0;
  await asyncTimeout(1);
  assert.equal(1, ++x);
  await asyncTimeout(1);
  assert.equal(2, ++x);
  done();
}