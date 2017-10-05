{
  var s1 = scale
      .scaleBand()
      .domain(["red", "green"])
      .range([1, 2])
      .round(true)
      .paddingInner(0.1)
      .paddingOuter(0.2),
    s2 = s1.copy();
  test.deepEqual(s2.domain(), s1.domain());
  test.deepEqual(s2.range(), s1.range());
  test.equal(s2.round(), s1.round());
  test.equal(s2.paddingInner(), s1.paddingInner());
  test.equal(s2.paddingOuter(), s1.paddingOuter());
  test.end();
}
