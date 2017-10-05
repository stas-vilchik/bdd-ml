{
  var x = scale
      .scaleTime()
      .domain([date.local(2009, 0, 1), date.local(2010, 0, 1)]),
    y = x.copy();
  x.range([1, 2]);
  test.deepEqual(x.invert(1), date.local(2009, 0, 1));
  test.deepEqual(y.invert(1), date.local(2010, 0, 1));
  test.deepEqual(y.range(), [0, 1]);
  y.range([2, 3]);
  test.deepEqual(x.invert(2), date.local(2010, 0, 1));
  test.deepEqual(y.invert(2), date.local(2009, 0, 1));
  test.deepEqual(x.range(), [1, 2]);
  test.deepEqual(y.range(), [2, 3]);
  test.end();
}
