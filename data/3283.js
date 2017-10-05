{
  var s1 = scale
      .scaleOrdinal()
      .domain([1, 2])
      .range(["red", "green"])
      .unknown("gray"),
    s2 = s1.copy();
  test.deepEqual(s2.domain(), s1.domain());
  test.deepEqual(s2.range(), s1.range());
  test.deepEqual(s2.unknown(), s1.unknown());
  test.end();
}
