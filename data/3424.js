{
  var f = scale.scaleTime().tickFormat();
  test.equal(f(date.local(2011, 0, 1)), "2011");
  test.equal(f(date.local(2012, 0, 1)), "2012");
  test.equal(f(date.local(2013, 0, 1)), "2013");
  test.end();
}
