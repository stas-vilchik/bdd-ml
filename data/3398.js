{
  var x = scale
      .scaleTime()
      .domain([date.local(2009, 0, 1), date.local(2010, 0, 1)])
      .clamp(true),
    y = x.copy();
  x.clamp(false);
  test.equal(x(date.local(2011, 0, 1)), 2);
  test.equal(y(date.local(2011, 0, 1)), 1);
  test.equal(y.clamp(), true);
  y.clamp(false);
  test.equal(x(date.local(2011, 0, 1)), 2);
  test.equal(y(date.local(2011, 0, 1)), 2);
  test.equal(x.clamp(), false);
  test.end();
}
