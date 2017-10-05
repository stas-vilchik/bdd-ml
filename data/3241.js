{
  var x = scale
    .scaleLog()
    .domain([1.1, 10.9])
    .nice();
  test.deepEqual(x.domain(), [1, 100]);
  x.domain([10.9, 1.1]).nice();
  test.deepEqual(x.domain(), [100, 1]);
  x.domain([0.7, 11.001]).nice();
  test.deepEqual(x.domain(), [0.1, 100]);
  x.domain([123.1, 6.7]).nice();
  test.deepEqual(x.domain(), [1000, 1]);
  x.domain([0.01, 0.49]).nice();
  test.deepEqual(x.domain(), [0.01, 1]);
  x.domain([1.5, 50]).nice();
  test.deepEqual(x.domain(), [1, 100]);
  test.inDelta(x(1), 0);
  test.inDelta(x(100), 1);
  test.end();
}
