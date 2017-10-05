{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 18), date.utc(2011, 4, 2)]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 1, 1, 0, 0),
    date.utc(2011, 2, 1, 0, 0),
    date.utc(2011, 3, 1, 0, 0),
    date.utc(2011, 4, 1, 0, 0)
  ]);
  test.end();
}
