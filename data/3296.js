{
  var s = scale.scalePow().domain([1, 2]);
  test.deepEqual(s.domain(), [1, 2]);
  test.equal(s(0.5), -0.5);
  test.equal(s(1.0), 0.0);
  test.equal(s(1.5), 0.5);
  test.equal(s(2.0), 1.0);
  test.equal(s(2.5), 1.5);
  test.equal(s.invert(-0.5), 0.5);
  test.equal(s.invert(0.0), 1.0);
  test.equal(s.invert(0.5), 1.5);
  test.equal(s.invert(1.0), 2.0);
  test.equal(s.invert(1.5), 2.5);
  test.end();
}
