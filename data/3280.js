{
  var s = scale.scaleOrdinal().range(["a", "b", "c"]);
  test.equal(s(0), "a");
  test.equal(s(1), "b");
  test.equal(s(2), "c");
  test.equal(s(3), "a");
  test.equal(s(4), "b");
  test.equal(s(5), "c");
  test.equal(s(2), "c");
  test.equal(s(1), "b");
  test.equal(s(0), "a");
  test.end();
}
