{
  var x = scale.scaleLog(),
    y = x.copy();
  x.domain([10, 100]);
  test.deepEqual(y.domain(), [1, 10]);
  test.inDelta(x(10), 0);
  test.inDelta(y(1), 0);
  y.domain([100, 1000]);
  test.inDelta(x(100), 1);
  test.inDelta(y(100), 0);
  test.deepEqual(x.domain(), [10, 100]);
  test.deepEqual(y.domain(), [100, 1000]);
  test.end();
}
