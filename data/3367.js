{
  var s = scale.scaleQuantize().range([0, 1, 2, 0]);
  test.deepEqual(s.invertExtent(0), [0.0, 0.25]);
  test.deepEqual(s.invertExtent(1), [0.25, 0.5]);
  test.end();
}
