{
  var s = scale.scaleQuantize();
  test.deepEqual(s.domain(), [0, 1]);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s(0.25), 0);
  test.equal(s(0.75), 1);
  test.end();
}
