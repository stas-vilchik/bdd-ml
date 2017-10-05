{
  var s = scale.scaleIdentity().domain([1, 2]);
  test.equal(s(0.5), 0.5);
  test.equal(s(1), 1);
  test.equal(s(1.5), 1.5);
  test.equal(s(2), 2);
  test.equal(s(2.5), 2.5);
  test.end();
}
