{
  var x = scale.scaleLog().clamp(true);
  test.inDelta(x.invert(-0.1), 1);
  test.inDelta(x.invert(0.69897), 5);
  test.inDelta(x.invert(1.5), 10);
  x.domain([10, 1]);
  test.inDelta(x.invert(-0.1), 10);
  test.inDelta(x.invert(0.30103), 5);
  test.inDelta(x.invert(1.5), 1);
  test.end();
}
