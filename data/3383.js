{
  var a = {},
    b = {},
    c = {},
    x = scale
      .scaleThreshold()
      .domain([1 / 3, 2 / 3])
      .range([a, b, c]);
  test.equal(x(0), a);
  test.equal(x(0.2), a);
  test.equal(x(0.4), b);
  test.equal(x(0.6), b);
  test.equal(x(0.8), c);
  test.equal(x(1), c);
  test.end();
}
