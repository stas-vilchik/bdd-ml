{
  var s = scale
    .scaleBand()
    .domain(["a", "b", "c"])
    .range([120, 0])
    .paddingInner(0.1)
    .round(true);
  test.deepEqual(s.domain().map(s), [83, 42, 1]);
  test.equal(s.bandwidth(), 37);
  s.paddingInner(0.2);
  test.deepEqual(s.domain().map(s), [85, 43, 1]);
  test.equal(s.bandwidth(), 34);
  test.end();
}
