{
  var x = scale.scaleUtc().domain([date.utc(2009, 0, 1), date.utc(2010, 0, 1)]),
    y = x.copy();
  x.domain([date.utc(2010, 0, 1), date.utc(2011, 0, 1)]);
  test.deepEqual(y.domain(), [date.utc(2009, 0, 1), date.utc(2010, 0, 1)]);
  test.equal(x(date.utc(2010, 0, 1)), 0);
  test.equal(y(date.utc(2010, 0, 1)), 1);
  y.domain([date.utc(2011, 0, 1), date.utc(2012, 0, 1)]);
  test.equal(x(date.utc(2011, 0, 1)), 1);
  test.equal(y(date.utc(2011, 0, 1)), 0);
  test.deepEqual(x.domain(), [date.utc(2010, 0, 1), date.utc(2011, 0, 1)]);
  test.deepEqual(y.domain(), [date.utc(2011, 0, 1), date.utc(2012, 0, 1)]);
  test.end();
}
