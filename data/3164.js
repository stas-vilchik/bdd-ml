{
  var s = scale.scaleIdentity().domain([1, 2]);
  test.equal(s.invert(0.5), 0.5);
  test.equal(s.invert(1), 1);
  test.equal(s.invert(1.5), 1.5);
  test.equal(s.invert(2), 2);
  test.equal(s.invert(2.5), 2.5);
  test.end();
}
