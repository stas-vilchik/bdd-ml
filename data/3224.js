{
  var x = scale.scaleLinear().clamp(true),
    y = x.copy();
  x.clamp(false);
  test.equal(x(2), 2);
  test.equal(y(2), 1);
  test.equal(y.clamp(), true);
  y.clamp(false);
  test.equal(x(2), 2);
  test.equal(y(2), 2);
  test.equal(x.clamp(), false);
  test.end();
}
