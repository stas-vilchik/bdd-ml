{
  var x = scale.scaleLog().clamp(true),
    y = x.copy();
  x.clamp(false);
  test.inDelta(x(0.5), -0.30103);
  test.inDelta(y(0.5), 0);
  test.equal(y.clamp(), true);
  y.clamp(false);
  test.inDelta(x(20), 1.30103);
  test.inDelta(y(20), 1.30103);
  test.equal(x.clamp(), false);
  test.end();
}
