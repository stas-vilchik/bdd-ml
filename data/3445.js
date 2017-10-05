{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 1, 12, 1, 0), date.utc(2011, 0, 1, 12, 4, 4)]);
  test.deepEqual(x.ticks(time.utcMinute), [
    date.utc(2011, 0, 1, 12, 1),
    date.utc(2011, 0, 1, 12, 2),
    date.utc(2011, 0, 1, 12, 3),
    date.utc(2011, 0, 1, 12, 4)
  ]);
  test.end();
}
