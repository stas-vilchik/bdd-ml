{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 1, 50)]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 12, 0, 0),
    date.utc(2011, 0, 1, 12, 0, 30),
    date.utc(2011, 0, 1, 12, 1, 0),
    date.utc(2011, 0, 1, 12, 1, 30)
  ]);
  test.end();
}
