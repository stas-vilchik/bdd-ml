{
  var x = scale.scaleLog().domain([1, 2]);
  test.inDelta(x.invert(-1.0), 0.5);
  test.inDelta(x.invert(0.0), 1.0);
  test.inDelta(x.invert(0.5849625), 1.5);
  test.inDelta(x.invert(1.0), 2.0);
  test.inDelta(x.invert(1.3219281), 2.5);
  test.end();
}
