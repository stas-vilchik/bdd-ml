{
  var x = scale.scaleUtc().domain([date.utc(0, 11, 18), date.utc(2014, 2, 2)]);
  test.deepEqual(x.ticks(6), [
    date.utc(500, 0, 1, 0, 0),
    date.utc(1000, 0, 1, 0, 0),
    date.utc(1500, 0, 1, 0, 0),
    date.utc(2000, 0, 1, 0, 0)
  ]);
  test.end();
}
