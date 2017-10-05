{
  var x = scale
    .scalePow()
    .exponent(0.5)
    .domain([1, 2]);
  test.inDelta(x(1), 0, 1e-6);
  test.inDelta(x(1.5), 0.5425821, 1e-6);
  test.inDelta(x(2), 1, 1e-6);
  test.equal(x.exponent(), 0.5);
  x.exponent(2).domain([1, 2]);
  test.inDelta(x(1), 0, 1e-6);
  test.inDelta(x(1.5), 0.41666667, 1e-6);
  test.inDelta(x(2), 1, 1e-6);
  test.equal(x.exponent(), 2);
  x.exponent(-1).domain([1, 2]);
  test.inDelta(x(1), 0, 1e-6);
  test.inDelta(x(1.5), 0.6666667, 1e-6);
  test.inDelta(x(2), 1, 1e-6);
  test.equal(x.exponent(), -1);
  test.end();
}
