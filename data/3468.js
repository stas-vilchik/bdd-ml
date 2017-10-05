{
  var x = scale.scaleUtc().domain([date.utc(2014, 2, 2), date.utc(2014, 2, 2)]);
  test.deepEqual(x.ticks(6), []);
  test.end();
}
