{
  var s = scale
    .scaleQuantile()
    .domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20])
    .range([0, 1, 2, 3]);
  test.deepEqual(s.invertExtent(0), [3, 7.25]);
  test.deepEqual(s.invertExtent(1), [7.25, 9]);
  test.deepEqual(s.invertExtent(2), [9, 14.5]);
  test.deepEqual(s.invertExtent(3), [14.5, 20]);
  test.end();
}
