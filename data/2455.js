{
  var o = new C();
  assert.equal("m1", o.m());
  assert.equal("g1", o.g);
  o.x = "x";
  assert.equal("x1", o.x);
}
