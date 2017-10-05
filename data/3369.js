{
  var e = s.invertExtent(y);
  test.equal(s(e[0]), y);
  test.equal(s(e[1]), y < 9 ? y + 1 : y);
}
