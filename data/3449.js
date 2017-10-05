{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 0, 4)]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 12, 0, 0),
    date.utc(2011, 0, 1, 12, 0, 1),
    date.utc(2011, 0, 1, 12, 0, 2),
    date.utc(2011, 0, 1, 12, 0, 3),
    date.utc(2011, 0, 1, 12, 0, 4)
  ]);
  test.end();
}
