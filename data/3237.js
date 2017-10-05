{
  var x = scale.scaleLog().domain([1, 2]);
  test.inDelta(x(0.5), -1.0);
  test.inDelta(x(1.0), 0.0);
  test.inDelta(x(1.5), 0.5849625);
  test.inDelta(x(2.0), 1.0);
  test.inDelta(x(2.5), 1.3219281);
  test.end();
}
