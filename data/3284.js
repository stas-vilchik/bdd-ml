{
  var s1 = scale.scaleOrdinal().range(["foo", "bar"]),
    s2 = s1.copy();
  s1.domain([1, 2]);
  test.deepEqual(s2.domain(), []);
  test.equal(s1(1), "foo");
  test.equal(s2(1), "foo");
  s2.domain([2, 3]);
  test.equal(s1(2), "bar");
  test.equal(s2(2), "foo");
  test.deepEqual(s1.domain(), [1, 2]);
  test.deepEqual(s2.domain(), [2, 3]);
  test.end();
}
