{
  var s = scale.scaleOrdinal().range(["foo", "bar"]);
  test.equal(s(1), "foo");
  test.equal(s(0), "bar");
  test.deepEqual(s.domain(), [1, 0]);
  s.domain(["0", "1"]);
  test.equal(s(0), "foo");
  test.equal(s(1), "bar");
  test.deepEqual(s.domain(), ["0", "1"]);
  test.end();
}
