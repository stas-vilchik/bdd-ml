{
  var x = scale
    .scaleUtc()
    .domain([
      date.utc(2009, 0, 1, 0, 12),
      date.utc(2009, 0, 1, 23, 48),
      date.utc(2009, 0, 2, 23, 48)
    ])
    .nice(time.utcDay);
  test.deepEqual(x.domain(), [
    date.utc(2009, 0, 1),
    date.utc(2009, 0, 1, 23, 48),
    date.utc(2009, 0, 3)
  ]);
  test.end();
}
