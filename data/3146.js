{
  var s = scale.scaleBand();
  test.equal(s.paddingInner("1.0").paddingInner(), 1);
  test.equal(s.paddingInner("-1.0").paddingInner(), 0);
  test.equal(s.paddingInner("2.0").paddingInner(), 1);
  test.ok(Number.isNaN(s.paddingInner(NaN).paddingInner()));
  test.end();
}
