{
  var s = scale
    .scaleBand()
    .domain(["foo"])
    .range([0, 960]);
  test.equal(s("foo"), 0);
  test.equal(s.step(), 960);
  test.equal(s.bandwidth(), 960);
  s.padding(0.5);
  test.equal(s("foo"), 320);
  test.equal(s.step(), 640);
  test.equal(s.bandwidth(), 320);
  s.padding(1);
  test.equal(s("foo"), 480);
  test.equal(s.step(), 480);
  test.equal(s.bandwidth(), 0);
  test.end();
}
