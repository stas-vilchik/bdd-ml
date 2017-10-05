{
  var f = scale.scaleTime().tickFormat();
  test.equal(f(date.local(2011, 1, 2)), "Wed 02");
  test.equal(f(date.local(2011, 1, 3)), "Thu 03");
  test.equal(f(date.local(2011, 1, 4)), "Fri 04");
  test.end();
}
