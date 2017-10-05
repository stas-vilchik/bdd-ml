{
  var a = {},
    b = {},
    c = {},
    s = scale
      .scaleQuantile()
      .domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20])
      .range([a, b, c, a]);
  test.deepEqual([3, 6, 6.9, 7, 7.1].map(s), [a, a, a, a, a]);
  test.deepEqual([8, 8.9].map(s), [b, b]);
  test.deepEqual([9, 9.1, 10, 13].map(s), [c, c, c, c]);
  test.deepEqual([14.9, 15, 15.1, 16, 20].map(s), [a, a, a, a, a]);
  test.end();
}
