{
  var f = scale.scaleTime().tickFormat();
  test.equal(f(date.local(2011, 1, 1)), "February");
  test.equal(f(date.local(2011, 2, 1)), "March");
  test.equal(f(date.local(2011, 3, 1)), "April");
  test.end();
}
