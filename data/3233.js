{
  var x = scale.scaleLog().range(["red", "blue"]);
  test.equal(x.interpolate(), interpolate.interpolate);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.interpolate(interpolate.interpolateHsl);
  test.equal(x(5), "rgb(154, 0, 255)");
  test.end();
}
