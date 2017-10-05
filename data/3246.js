{
  var x = scale.scaleLog(),
    y = x.copy();
  x.range([1, 2]);
  test.inDelta(x.invert(1), 1);
  test.inDelta(y.invert(1), 10);
  test.deepEqual(y.range(), [0, 1]);
  y.range([2, 3]);
  test.inDelta(x.invert(2), 10);
  test.inDelta(y.invert(2), 1);
  test.deepEqual(x.range(), [1, 2]);
  test.deepEqual(y.range(), [2, 3]);
  test.end();
}
