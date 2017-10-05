{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2009, 0, 1, 0, 12), date.utc(2009, 0, 1, 23, 48)]);
  test.deepEqual(x.nice(time.utcDay, 3).domain(), [
    date.utc(2009, 0, 1),
    date.utc(2009, 0, 4)
  ]);
  test.deepEqual(x.nice(time.utcWeek, 2).domain(), [
    date.utc(2008, 11, 21),
    date.utc(2009, 0, 4)
  ]);
  test.deepEqual(x.nice(time.utcMonth, 3).domain(), [
    date.utc(2008, 9, 1),
    date.utc(2009, 3, 1)
  ]);
  test.deepEqual(x.nice(time.utcYear, 10).domain(), [
    date.utc(2000, 0, 1),
    date.utc(2010, 0, 1)
  ]);
  test.end();
}
