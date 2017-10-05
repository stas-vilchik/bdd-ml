{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 33, 4)]);
  test.deepEqual(x.ticks(time.utcMinute, 10), [
    date.utc(2011, 0, 1, 12, 0),
    date.utc(2011, 0, 1, 12, 10),
    date.utc(2011, 0, 1, 12, 20),
    date.utc(2011, 0, 1, 12, 30)
  ]);
  test.end();
}
