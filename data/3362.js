{
  var s = scale.scaleQuantize();
  test.inDelta(s.range(array.range(0, 1.001, 0.001))(1 / 3), 0.333, 1e-6);
  test.inDelta(s.range(array.range(0, 1.01, 0.01))(1 / 3), 0.33, 1e-6);
  test.inDelta(s.range(array.range(0, 1.1, 0.1))(1 / 3), 0.3, 1e-6);
  test.inDelta(s.range(array.range(0, 1.2, 0.2))(1 / 3), 0.4, 1e-6);
  test.inDelta(s.range(array.range(0, 1.25, 0.25))(1 / 3), 0.25, 1e-6);
  test.inDelta(s.range(array.range(0, 1.5, 0.5))(1 / 3), 0.5, 1e-6);
  test.inDelta(s.range(array.range(1))(1 / 3), 0, 1e-6);
  test.end();
}
