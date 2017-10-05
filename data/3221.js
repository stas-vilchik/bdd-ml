{
  var x = scale.scaleLinear(),
    y = x.copy();
  x.range([1, 2]);
  test.equal(x.invert(1), 0);
  test.equal(y.invert(1), 1);
  test.deepEqual(y.range(), [0, 1]);
  y.range([2, 3]);
  test.equal(x.invert(2), 1);
  test.equal(y.invert(2), 0);
  test.deepEqual(x.range(), [1, 2]);
  test.deepEqual(y.range(), [2, 3]);
  test.end();
}
