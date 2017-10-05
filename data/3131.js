{
  var s = scale.scaleBand().range([0, 960]);
  test.equal(s("foo"), undefined);
  s.domain(["foo", "bar"]);
  test.equal(s("foo"), 0);
  test.equal(s("bar"), 480);
  s.domain(["a", "b", "c"]).range([0, 120]);
  test.deepEqual(s.domain().map(s), [0, 40, 80]);
  test.equal(s.bandwidth(), 40);
  s.padding(0.2);
  test.deepEqual(s.domain().map(s), [7.5, 45, 82.5]);
  test.equal(s.bandwidth(), 30);
  test.end();
}
