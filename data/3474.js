{
  var f = scale.scaleUtc().tickFormat();
  test.equal(f(date.utc(2011, 1, 2, 11, 59)), "11:59");
  test.equal(f(date.utc(2011, 1, 2, 12, 1)), "12:01");
  test.equal(f(date.utc(2011, 1, 2, 12, 2)), "12:02");
  test.end();
}
