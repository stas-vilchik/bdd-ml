{
  var x = scale.scaleLog().range(["red", "blue"]);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.range(["#ff0000", "#0000ff"]);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.range(["#f00", "#00f"]);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.range([color.rgb(255, 0, 0), color.hsl(240, 1, 0.5)]);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.range(["hsl(0,100%,50%)", "hsl(240,100%,50%)"]);
  test.equal(x(5), "rgb(77, 0, 178)");
  test.end();
}
