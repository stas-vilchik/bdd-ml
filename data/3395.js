{
  var x = scale
      .scaleTime()
      .domain([date.local(2009, 0, 1), date.local(2010, 0, 1)]),
    y = x.copy();
  x.domain([date.local(2010, 0, 1), date.local(2011, 0, 1)]);
  test.deepEqual(y.domain(), [date.local(2009, 0, 1), date.local(2010, 0, 1)]);
  test.equal(x(date.local(2010, 0, 1)), 0);
  test.equal(y(date.local(2010, 0, 1)), 1);
  y.domain([date.local(2011, 0, 1), date.local(2012, 0, 1)]);
  test.equal(x(date.local(2011, 0, 1)), 1);
  test.equal(y(date.local(2011, 0, 1)), 0);
  test.deepEqual(x.domain(), [date.local(2010, 0, 1), date.local(2011, 0, 1)]);
  test.deepEqual(y.domain(), [date.local(2011, 0, 1), date.local(2012, 0, 1)]);
  test.end();
}
