{
  var f = scale
    .scaleLinear()
    .domain([0, NaN])
    .tickFormat();
  test.equal(f + "", " >-,f");
  test.equal(f(0.12), "0.120000");
  test.end();
}
