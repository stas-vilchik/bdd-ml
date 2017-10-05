{
  var x = scale
    .scaleUtc()
    .domain([
      date.utc(2011, 0, 1, 12, 28, 27),
      date.utc(2011, 0, 1, 14, 4, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 12, 30),
    date.utc(2011, 0, 1, 13, 0),
    date.utc(2011, 0, 1, 13, 30),
    date.utc(2011, 0, 1, 14, 0)
  ]);
  test.end();
}
