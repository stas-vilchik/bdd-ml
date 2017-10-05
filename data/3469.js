{
  var f = scale.scaleUtc().tickFormat();
  test.equal(f(date.utc(2011, 0, 1)), "2011");
  test.equal(f(date.utc(2012, 0, 1)), "2012");
  test.equal(f(date.utc(2013, 0, 1)), "2013");
  test.end();
}
