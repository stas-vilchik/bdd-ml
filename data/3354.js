{
  var a = {},
    b = {},
    s = scale
      .scaleQuantile()
      .domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20])
      .range([a, b]);
  test.deepEqual(s.invertExtent(a), [3, 9]);
  test.deepEqual(s.invertExtent(b), [9, 20]);
  test.end();
}
