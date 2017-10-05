{
  var x = scale
    .scaleLog()
    .domain([0.1, 1, 100])
    .range(["red", "white", "green"]);
  test.equal(x(0.5), "rgb(255, 178, 178)");
  test.equal(x(50), "rgb(38, 147, 38)");
  test.equal(x(75), "rgb(16, 136, 16)");
  test.end();
}
