{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2009, 0, 1, 0, 12), date.utc(2009, 0, 1, 0, 12)]);
  test.deepEqual(x.nice(time.utcDay).domain(), [
    date.utc(2009, 0, 1),
    date.utc(2009, 0, 2)
  ]);
  test.end();
}
