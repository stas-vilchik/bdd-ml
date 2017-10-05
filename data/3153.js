{
  var s1 = scale
      .scaleBand()
      .domain(["foo", "bar"])
      .range([0, 2]),
    s2 = s1.copy();
  s1.range([3, 5]);
  test.deepEqual(s2.range(), [0, 2]);
  test.deepEqual(s1.domain().map(s1), [3, 4]);
  test.deepEqual(s2.domain().map(s2), [0, 1]);
  s2.range([5, 7]);
  test.deepEqual(s1.range(), [3, 5]);
  test.deepEqual(s1.domain().map(s1), [3, 4]);
  test.deepEqual(s2.domain().map(s2), [5, 6]);
  test.end();
}
