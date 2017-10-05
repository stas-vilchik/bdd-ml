{
  var s = scale.scaleIdentity().domain([-10, 0, 100]);
  test.deepEqual(s.domain(), [-10, 0, 100]);
  test.equal(s(-5), -5);
  test.equal(s(50), 50);
  test.equal(s(75), 75);
  s.range([-10, 0, 100]);
  test.deepEqual(s.range(), [-10, 0, 100]);
  test.equal(s(-5), -5);
  test.equal(s(50), 50);
  test.equal(s(75), 75);
  test.end();
}
