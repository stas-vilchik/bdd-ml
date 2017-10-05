{
  var s = scale.scaleSqrt();
  test.equal(s.exponent(), 0.5);
  test.inDelta(s(0.5), Math.SQRT1_2, 1e-6);
  test.inDelta(s.invert(Math.SQRT1_2), 0.5, 1e-6);
  test.end();
}
