{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 1, 12, 0, 27), date.utc(2011, 0, 1, 12, 4, 12)]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 12, 1),
    date.utc(2011, 0, 1, 12, 2),
    date.utc(2011, 0, 1, 12, 3),
    date.utc(2011, 0, 1, 12, 4)
  ]);
  test.end();
}
