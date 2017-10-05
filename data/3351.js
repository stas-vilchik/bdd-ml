{
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]);
  test.deepEqual(s.range([0, 1, 2, 3]).quantiles(), [7.25, 9, 14.5]);
  test.deepEqual(s.range([0, 1]).quantiles(), [9]);
  test.deepEqual(s.range([, , , , ,]).quantiles(), [6.8, 8, 11.2, 15.2]);
  test.deepEqual(s.range([, , , , , ,]).quantiles(), [6.5, 8, 9, 13, 15.5]);
  test.end();
}
