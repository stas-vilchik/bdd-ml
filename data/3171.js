{
  var s = scale.scaleIdentity().domain([Infinity, NaN]);
  test.equal(s(42), 42);
  test.equal(s.invert(-42), -42);
  test.end();
}
