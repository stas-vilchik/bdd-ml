{
  var s1 = scale.scaleOrdinal().range(["foo", "bar"]),
    s2 = s1.copy();
  s1.range(["bar", "foo"]);
  test.equal(s1(1), "bar");
  test.equal(s2(1), "foo");
  test.deepEqual(s2.range(), ["foo", "bar"]);
  s2.range(["foo", "baz"]);
  test.equal(s1(2), "foo");
  test.equal(s2(2), "baz");
  test.deepEqual(s1.range(), ["bar", "foo"]);
  test.deepEqual(s2.range(), ["foo", "baz"]);
  test.end();
}
