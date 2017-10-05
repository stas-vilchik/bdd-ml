{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2010, 11, 18), date.utc(2014, 2, 2)]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 0, 0),
    date.utc(2012, 0, 1, 0, 0),
    date.utc(2013, 0, 1, 0, 0),
    date.utc(2014, 0, 1, 0, 0)
  ]);
  test.end();
}
