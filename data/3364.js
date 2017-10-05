{
  var s = scale.scaleQuantize().range([0, 1, 2, 3]);
  test.deepEqual(s.invertExtent(0), [0.0, 0.25]);
  test.deepEqual(s.invertExtent(1), [0.25, 0.5]);
  test.deepEqual(s.invertExtent(2), [0.5, 0.75]);
  test.deepEqual(s.invertExtent(3), [0.75, 1.0]);
  test.end();
}
