{
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]);
  test.ok(s.invertExtent(-1).every(isNaN));
  test.ok(s.invertExtent(0.5).every(isNaN));
  test.ok(s.invertExtent(2).every(isNaN));
  test.ok(s.invertExtent("a").every(isNaN));
  test.end();
}
