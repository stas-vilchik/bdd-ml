{
  var s = scale.scaleOrdinal();
  s("foo");
  s("bar");
  s("baz");
  test.deepEqual(s.domain(), ["foo", "bar", "baz"]);
  s.domain(["baz", "bar"]);
  s("foo");
  test.deepEqual(s.domain(), ["baz", "bar", "foo"]);
  s.domain(["baz", "foo"]);
  test.deepEqual(s.domain(), ["baz", "foo"]);
  s.domain([]);
  s("foo");
  s("bar");
  test.deepEqual(s.domain(), ["foo", "bar"]);
  test.end();
}
