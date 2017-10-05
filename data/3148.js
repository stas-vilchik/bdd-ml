{
  var s = scale.scaleBand();
  test.equal(s.paddingOuter("1.0").paddingOuter(), 1);
  test.equal(s.paddingOuter("-1.0").paddingOuter(), 0);
  test.equal(s.paddingOuter("2.0").paddingOuter(), 1);
  test.ok(Number.isNaN(s.paddingOuter(NaN).paddingOuter()));
  test.end();
}
