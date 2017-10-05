{
  var x = scale
    .scaleUtc()
    .domain([
      date.utc(2011, 0, 1, 16, 28, 27),
      date.utc(2011, 0, 5, 21, 34, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 2, 0, 0),
    date.utc(2011, 0, 3, 0, 0),
    date.utc(2011, 0, 4, 0, 0),
    date.utc(2011, 0, 5, 0, 0)
  ]);
  test.end();
}
