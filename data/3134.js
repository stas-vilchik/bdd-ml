{
  var s = scale.scaleBand().range([0, 960]);
  test.equal(s.domain(["foo"]).step(), 960);
  test.equal(s.domain(["foo", "bar"]).step(), 480);
  test.equal(s.domain(["foo", "bar", "baz"]).step(), 320);
  s.padding(0.5);
  test.equal(s.domain(["foo"]).step(), 640);
  test.equal(s.domain(["foo", "bar"]).step(), 384);
  test.end();
}
