{
  var f = scale.scaleTime().tickFormat();
  test.equal(f(date.local(2011, 1, 2, 11)), "11 AM");
  test.equal(f(date.local(2011, 1, 2, 12)), "12 PM");
  test.equal(f(date.local(2011, 1, 2, 13)), "01 PM");
  test.end();
}
