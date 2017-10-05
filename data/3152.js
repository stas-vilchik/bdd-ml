{
  var s1 = scale
      .scaleBand()
      .domain(["foo", "bar"])
      .range([0, 2]),
    s2 = s1.copy();
  s1.domain(["red", "blue"]);
  test.deepEqual(s2.domain(), ["foo", "bar"]);
  test.deepEqual(s1.domain().map(s1), [0, 1]);
  test.deepEqual(s2.domain().map(s2), [0, 1]);
  s2.domain(["red", "blue"]);
  test.deepEqual(s1.domain(), ["red", "blue"]);
  test.deepEqual(s1.domain().map(s1), [0, 1]);
  test.deepEqual(s2.domain().map(s2), [0, 1]);
  test.end();
}
