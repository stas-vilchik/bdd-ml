{
  var s = scale
    .scaleBand()
    .domain(["a", "b", "c"])
    .rangeRound([0, 100]);
  test.deepEqual(s.domain().map(s), [1, 34, 67]);
  test.equal(s.bandwidth(), 33);
  s.domain(["a", "b", "c", "d"]);
  test.deepEqual(s.domain().map(s), [0, 25, 50, 75]);
  test.equal(s.bandwidth(), 25);
  test.end();
}
