{
  var x = scale
    .scaleUtc()
    .domain([
      date.utc(2011, 0, 1, 12, 3, 27),
      date.utc(2011, 0, 1, 12, 21, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.utc(2011, 0, 1, 12, 5),
    date.utc(2011, 0, 1, 12, 10),
    date.utc(2011, 0, 1, 12, 15),
    date.utc(2011, 0, 1, 12, 20)
  ]);
  test.end();
}
