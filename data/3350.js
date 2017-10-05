{
  var s = scale
    .scaleQuantile()
    .domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20])
    .range([0, 1, 2, 3]);
  test.deepEqual(s.quantiles(), [7.25, 9, 14.5]);
  s.domain([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20]).range([0, 1, 2, 3]);
  test.deepEqual(s.quantiles(), [7.5, 9, 14]);
  test.end();
}
