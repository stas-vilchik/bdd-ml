{
  var f = scale.scaleTime().tickFormat(10, "%c");
  test.equal(f(date.local(2011, 1, 2, 12)), "2/2/2011, 12:00:00 PM");
  test.end();
}
