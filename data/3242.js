{
  var x = scale
    .scaleLog()
    .domain([0, 0])
    .nice();
  test.deepEqual(x.domain(), [0, 0]);
  x.domain([0.5, 0.5]).nice();
  test.deepEqual(x.domain(), [0.1, 1]);
  test.end();
}
