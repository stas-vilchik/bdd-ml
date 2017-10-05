{
  var s = scale.scaleIdentity().domain([0.123456789, 1.23456789]);
  test.equal(s.tickFormat(1)(s.ticks(1)[0]), "1");
  test.equal(s.tickFormat(2)(s.ticks(2)[0]), "0.5");
  test.equal(s.tickFormat(4)(s.ticks(4)[0]), "0.2");
  test.equal(s.tickFormat(8)(s.ticks(8)[0]), "0.2");
  test.equal(s.tickFormat(16)(s.ticks(16)[0]), "0.15");
  test.equal(s.tickFormat(32)(s.ticks(32)[0]), "0.15");
  test.equal(s.tickFormat(64)(s.ticks(64)[0]), "0.14");
  test.equal(s.tickFormat(128)(s.ticks(128)[0]), "0.13");
  test.equal(s.tickFormat(256)(s.ticks(256)[0]), "0.125");
  test.end();
}
