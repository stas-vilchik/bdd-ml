{
  var s = scale.scaleBand().range([0, 960]);
  test.equal(s.domain([]).bandwidth(), 960);
  test.equal(s.domain(["foo"]).bandwidth(), 960);
  test.equal(s.domain(["foo", "bar"]).bandwidth(), 480);
  test.equal(s.domain(["foo", "bar", "baz"]).bandwidth(), 320);
  s.padding(0.5);
  test.equal(s.domain([]).bandwidth(), 480);
  test.equal(s.domain(["foo"]).bandwidth(), 320);
  test.equal(s.domain(["foo", "bar"]).bandwidth(), 192);
  test.end();
}
