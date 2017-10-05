{
  var a = {},
    b = {},
    s = scale.scaleQuantize().range([a, b]);
  test.deepEqual(s.invertExtent(a), [0.0, 0.5]);
  test.deepEqual(s.invertExtent(b), [0.5, 1.0]);
  test.end();
}
