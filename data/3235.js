{
  var x = scale.scaleLog().clamp(true);
  test.inDelta(x(-1), 0);
  test.inDelta(x(5), 0.69897);
  test.inDelta(x(15), 1);
  x.domain([10, 1]);
  test.inDelta(x(-1), 1);
  test.inDelta(x(5), 0.30103);
  test.inDelta(x(15), 0);
  test.end();
}
