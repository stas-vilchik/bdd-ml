{
  var s = scale.scaleOrdinal().range(["foo", "bar"]);
  test.deepEqual(s.domain(), []);
  test.equal(s(0), "foo");
  test.deepEqual(s.domain(), [0]);
  test.equal(s(1), "bar");
  test.deepEqual(s.domain(), [0, 1]);
  test.equal(s(0), "foo");
  test.deepEqual(s.domain(), [0, 1]);
  test.end();
}
