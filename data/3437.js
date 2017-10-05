{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2009, 0, 1, 0, 12), date.utc(2009, 0, 1, 23, 48)]);
  test.deepEqual(x.nice(time.utcDay).domain(), [
    date.utc(2009, 0, 1),
    date.utc(2009, 0, 2)
  ]);
  test.deepEqual(x.nice(time.utcWeek).domain(), [
    date.utc(2008, 11, 28),
    date.utc(2009, 0, 4)
  ]);
  test.deepEqual(x.nice(time.utcMonth).domain(), [
    date.utc(2008, 11, 1),
    date.utc(2009, 1, 1)
  ]);
  test.deepEqual(x.nice(time.utcYear).domain(), [
    date.utc(2008, 0, 1),
    date.utc(2010, 0, 1)
  ]);
  test.end();
}
