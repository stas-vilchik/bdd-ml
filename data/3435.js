{
  var x = scale
    .scaleUtc()
    .domain([date.utc(2009, 0, 1, 0, 12), date.utc(2009, 0, 1, 0, 12)]);
  test.deepEqual(x.nice().domain(), [
    date.utc(2009, 0, 1, 0, 12),
    date.utc(2009, 0, 1, 0, 12)
  ]);
  test.end();
}
