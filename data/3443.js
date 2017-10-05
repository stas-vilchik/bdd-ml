{
  var x = scale
      .scaleUtc()
      .domain([date.utc(2009, 0, 1), date.utc(2010, 0, 1)])
      .range(["red", "blue"]),
    i = x.interpolate(),
    y = x.copy();
  x.interpolate(interpolate.interpolateHsl);
  test.equal(x(date.utc(2009, 6, 1)), "rgb(255, 0, 253)");
  test.equal(y(date.utc(2009, 6, 1)), "rgb(129, 0, 126)");
  test.equal(y.interpolate(), i);
  test.end();
}
