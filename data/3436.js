{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2009, 0, 1, 0, 17), date.utc(2009, 0, 1, 23, 42)]);
  test.deepEqual(x.nice(100).domain(), [
    date.utc(2009, 0, 1, 0, 15),
    date.utc(2009, 0, 1, 23, 45)
  ]);
  test.deepEqual(x.nice(10).domain(), [
    date.utc(2009, 0, 1),
    date.utc(2009, 0, 2)
  ]);
  test.end();
}
