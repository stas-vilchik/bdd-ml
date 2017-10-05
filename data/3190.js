{
  var s = scale.scaleLinear(),
    d = s.domain();
  test.deepEqual(d, [0, 1]);
  d.push(3);
  test.deepEqual(s.domain(), [0, 1]);
  test.end();
}
