{
  var x = scale
    .scaleUtc()
    .domain([
      date.utc(2013, 0, 1, 12, 0, 0, 0),
      date.utc(2013, 0, 1, 12, 0, 0, 128)
    ]);
  test.deepEqual(x.nice().domain(), [
    date.utc(2013, 0, 1, 12, 0, 0, 0),
    date.utc(2013, 0, 1, 12, 0, 0, 130)
  ]);
  test.end();
}
