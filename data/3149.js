{
  var s = scale
    .scaleBand()
    .domain(["a", "b", "c"])
    .rangeRound([0, 100]);
  test.deepEqual(s.range(), [0, 100]);
  test.equal(s.round(), true);
  test.end();
}
