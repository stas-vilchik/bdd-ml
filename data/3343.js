{
  var s = scale.scaleQuantile();
  test.deepEqual(s.domain(), []);
  test.deepEqual(s.range(), []);
  test.end();
}
