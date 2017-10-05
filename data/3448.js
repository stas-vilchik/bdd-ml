{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 0, 1)]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 12, 0, 0, 0),
    date.utc(2011, 0, 1, 12, 0, 0, 200),
    date.utc(2011, 0, 1, 12, 0, 0, 400),
    date.utc(2011, 0, 1, 12, 0, 0, 600),
    date.utc(2011, 0, 1, 12, 0, 0, 800),
    date.utc(2011, 0, 1, 12, 0, 1, 0)
  ]);
  test.end();
}
