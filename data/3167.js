{
  var s = scale.scaleIdentity();
  test.equal(s.domain, s.range);
  test.deepEqual(s.domain(), s.range());
  s.domain([-10, 0, 100]);
  test.deepEqual(s.range(), [-10, 0, 100]);
  s.range([-10, 0, 100]);
  test.deepEqual(s.domain(), [-10, 0, 100]);
  test.end();
}
