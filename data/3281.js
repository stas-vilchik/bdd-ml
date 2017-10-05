{
  var s = scale
    .scaleOrdinal()
    .domain(["foo", "bar"])
    .unknown("gray")
    .range(["red", "blue"]);
  test.equal(s("foo"), "red");
  test.equal(s("bar"), "blue");
  test.equal(s("baz"), "gray");
  test.equal(s("quux"), "gray");
  test.end();
}
