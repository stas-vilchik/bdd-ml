{
  var s = scale
    .scaleBand()
    .domain(["a", "b", "c"])
    .range([120, 0]);
  test.deepEqual(s.domain().map(s), [80, 40, 0]);
  test.equal(s.bandwidth(), 40);
  s.padding(0.2);
  test.deepEqual(s.domain().map(s), [82.5, 45, 7.5]);
  test.equal(s.bandwidth(), 30);
  test.end();
}
