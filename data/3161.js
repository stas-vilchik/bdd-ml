{
  var s = scale.scaleIdentity();
  test.deepEqual(s.domain(), [0, 1]);
  test.deepEqual(s.range(), [0, 1]);
  test.end();
}
