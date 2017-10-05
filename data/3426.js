{
  var f = scale.scaleTime().tickFormat();
  test.equal(f(date.local(2011, 1, 6)), "Feb 06");
  test.equal(f(date.local(2011, 1, 13)), "Feb 13");
  test.equal(f(date.local(2011, 1, 20)), "Feb 20");
  test.end();
}
