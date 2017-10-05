{
  var x = scale
    .scaleUtc()
    .domain([
      date.utc(2011, 0, 1, 16, 28, 27),
      date.utc(2011, 0, 23, 21, 34, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 2, 0, 0),
    date.utc(2011, 0, 9, 0, 0),
    date.utc(2011, 0, 16, 0, 0),
    date.utc(2011, 0, 23, 0, 0)
  ]);
  test.end();
}
