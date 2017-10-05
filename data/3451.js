{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 0, 50)]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 12, 0, 0),
    date.utc(2011, 0, 1, 12, 0, 15),
    date.utc(2011, 0, 1, 12, 0, 30),
    date.utc(2011, 0, 1, 12, 0, 45)
  ]);
  test.end();
}
