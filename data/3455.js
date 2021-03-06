{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 1, 12, 8, 27), date.utc(2011, 0, 1, 13, 4, 12)]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 12, 15),
    date.utc(2011, 0, 1, 12, 30),
    date.utc(2011, 0, 1, 12, 45),
    date.utc(2011, 0, 1, 13, 0)
  ]);
  test.end();
}
