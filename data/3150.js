{
  var s = scale
    .scaleBand()
    .domain(["a", "b", "c"])
    .range([0, 100])
    .round(true);
  test.deepEqual(s.domain().map(s), [1, 34, 67]);
  test.equal(s.bandwidth(), 33);
  s.padding(0.2);
  test.deepEqual(s.domain().map(s), [7, 38, 69]);
  test.equal(s.bandwidth(), 25);
  test.end();
}
