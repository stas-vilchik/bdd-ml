{
  var s = scale
    .scaleBand()
    .domain([])
    .range([0, 960]);
  test.equal(s.step(), 960);
  test.equal(s.bandwidth(), 960);
  s.padding(0.5);
  test.equal(s.step(), 960);
  test.equal(s.bandwidth(), 480);
  s.padding(1);
  test.equal(s.step(), 960);
  test.equal(s.bandwidth(), 0);
  test.end();
}
