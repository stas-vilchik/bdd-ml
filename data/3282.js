{
  var s = scale
    .scaleOrdinal()
    .domain(["foo", "bar"])
    .unknown(undefined)
    .range(["red", "blue"]);
  test.equal(s("baz"), undefined);
  test.deepEqual(s.domain(), ["foo", "bar"]);
  test.end();
}
