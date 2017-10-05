{
  var x = scale.scaleLog().range(["red", "blue"]),
    y = x.copy();
  x.interpolate(interpolate.interpolateHsl);
  test.equal(x(5), "rgb(154, 0, 255)");
  test.equal(y(5), "rgb(77, 0, 178)");
  test.equal(y.interpolate(), interpolate.interpolate);
  test.end();
}
