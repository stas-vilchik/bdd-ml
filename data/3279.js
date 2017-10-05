{
  var s = scale.scaleOrdinal();
  test.equal(s(0), undefined);
  test.equal(s(1), undefined);
  s.range(["foo", "bar"]);
  test.equal(s(1), "bar");
  test.equal(s(0), "foo");
  test.end();
}
