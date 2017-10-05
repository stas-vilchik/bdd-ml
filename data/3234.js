{
  var x = scale.scaleLog();
  test.equal(x.clamp(), false);
  test.inDelta(x(0.5), -0.3010299);
  test.inDelta(x(15), 1.1760913);
  test.end();
}
