{
  var s = scale
    .scaleOrdinal()
    .domain([0, 1])
    .range(["foo", "bar"]);
  test.equal(s(0), "foo");
  test.equal(s(1), "bar");
  s.range(["a", "b", "c"]);
  test.equal(s(0), "a");
  test.equal(s("0"), "a");
  test.equal(s([0]), "a");
  test.equal(s(1), "b");
  test.equal(s(2.0), "c");
  test.equal(s(new Number(2)), "c");
  test.end();
}
