{
  var f = scale.scaleUtc().tickFormat();
  test.equal(f(date.utc(2011, 1, 1)), "February");
  test.equal(f(date.utc(2011, 2, 1)), "March");
  test.equal(f(date.utc(2011, 3, 1)), "April");
  test.end();
}
