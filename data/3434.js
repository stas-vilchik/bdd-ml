{
  var x = scale.scaleUtc().domain([date.utc(2001, 0, 1), date.utc(2138, 0, 1)]);
  test.deepEqual(x.nice().domain(), [
    date.utc(2000, 0, 1),
    date.utc(2140, 0, 1)
  ]);
  test.end();
}
