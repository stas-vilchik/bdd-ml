{
  var s = scale.scaleQuantize();
  test.ok(s.invertExtent(-1).every(Number.isNaN));
  test.ok(s.invertExtent(0.5).every(Number.isNaN));
  test.ok(s.invertExtent(2).every(Number.isNaN));
  test.ok(s.invertExtent("a").every(Number.isNaN));
  test.end();
}
