{
  var x = scale.scaleLog().domain([1.5, 50]),
    y = x.copy().nice();
  test.deepEqual(x.domain(), [1.5, 50]);
  test.inDelta(x(1.5), 0);
  test.inDelta(x(50), 1);
  test.inDelta(x.invert(0), 1.5);
  test.inDelta(x.invert(1), 50);
  test.deepEqual(y.domain(), [1, 100]);
  test.inDelta(y(1), 0);
  test.inDelta(y(100), 1);
  test.inDelta(y.invert(0), 1);
  test.inDelta(y.invert(1), 100);
  test.end();
}
