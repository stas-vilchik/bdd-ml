{
  var f = scale.scaleUtc().tickFormat();
  test.equal(f(date.utc(2011, 1, 2, 12, 1, 9)), ":09");
  test.equal(f(date.utc(2011, 1, 2, 12, 1, 10)), ":10");
  test.equal(f(date.utc(2011, 1, 2, 12, 1, 11)), ":11");
  test.end();
}
