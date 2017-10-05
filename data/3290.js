{
  var s = scale.scalePoint();
  test.deepEqual(s.domain(), []);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s.bandwidth(), 0);
  test.equal(s.step(), 1);
  test.equal(s.round(), false);
  test.equal(s.padding(), 0);
  test.equal(s.align(), 0.5);
  test.end();
}
