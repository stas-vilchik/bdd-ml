{
  var x = scale
    .scaleLog()
    .domain([1.1, 1.5, 10.9])
    .nice();
  test.deepEqual(x.domain(), [1, 1.5, 100]);
  x.domain([-123.1, -1.5, -0.5]).nice();
  test.deepEqual(x.domain(), [-1000, -1.5, -0.1]);
  test.end();
}
