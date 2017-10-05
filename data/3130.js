{
  var s = scale.scaleBand();
  test.deepEqual(s.domain(), []);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s.bandwidth(), 1);
  test.equal(s.step(), 1);
  test.equal(s.round(), false);
  test.equal(s.paddingInner(), 0);
  test.equal(s.paddingOuter(), 0);
  test.equal(s.align(), 0.5);
  test.end();
}
