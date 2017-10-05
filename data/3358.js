{
  var s = scale.scaleQuantize().range([0, 1, 2]);
  test.equal(s(0.0), 0);
  test.equal(s(0.2), 0);
  test.equal(s(0.4), 1);
  test.equal(s(0.6), 1);
  test.equal(s(0.8), 2);
  test.equal(s(1.0), 2);
  test.end();
}
