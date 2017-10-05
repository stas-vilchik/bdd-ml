{
  var x = scale
      .scaleTime()
      .domain([date.local(2009, 0, 1), date.local(2010, 0, 1)])
      .range(["red", "blue"]),
    i = x.interpolate(),
    y = x.copy();
  x.interpolate(interpolate.interpolateHsl);
  test.equal(x(date.local(2009, 6, 1)), "rgb(255, 0, 253)");
  test.equal(y(date.local(2009, 6, 1)), "rgb(129, 0, 126)");
  test.equal(y.interpolate(), i);
  test.end();
}
