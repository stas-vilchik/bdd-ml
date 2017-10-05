{
  var v = await ret(4);
  assert.equal(v, 2);
  v = await ret(0);
  assert.equal(v, 3);
  done();
}