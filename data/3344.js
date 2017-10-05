{
  var s = scale
    .scaleQuantile()
    .domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20])
    .range([0, 1, 2, 3]);
  test.deepEqual([3, 6, 6.9, 7, 7.1].map(s), [0, 0, 0, 0, 0]);
  test.deepEqual([8, 8.9].map(s), [1, 1]);
  test.deepEqual([9, 9.1, 10, 13].map(s), [2, 2, 2, 2]);
  test.deepEqual([14.9, 15, 15.1, 16, 20].map(s), [3, 3, 3, 3, 3]);
  s.domain([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20]).range([0, 1, 2, 3]);
  test.deepEqual([3, 6, 6.9, 7, 7.1].map(s), [0, 0, 0, 0, 0]);
  test.deepEqual([8, 8.9].map(s), [1, 1]);
  test.deepEqual([9, 9.1, 10, 13].map(s), [2, 2, 2, 2]);
  test.deepEqual([14.9, 15, 15.1, 16, 20].map(s), [3, 3, 3, 3, 3]);
  test.end();
}
