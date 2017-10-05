{
  test.equal(d3.interpolateRainbow(0.0), "rgb(110, 64, 170)");
  test.equal(d3.interpolateRainbow(0.5), "rgb(175, 240, 91)");
  test.equal(d3.interpolateRainbow(1.0), "rgb(110, 64, 170)");
  test.end();
}
