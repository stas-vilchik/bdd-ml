{
  var s = scale
    .scaleBand()
    .domain(["a", "b", "c"])
    .range([120, 0])
    .paddingInner(0.2)
    .paddingOuter(0.1);
  test.deepEqual(s.domain().map(s), [84, 44, 4]);
  test.equal(s.bandwidth(), 32);
  s.paddingOuter(1);
  test.deepEqual(s.domain().map(s), [75, 50, 25]);
  test.equal(s.bandwidth(), 20);
  test.end();
}
