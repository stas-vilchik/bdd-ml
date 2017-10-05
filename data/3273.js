{
  var s = scale
    .scaleOrdinal()
    .domain(["foo"])
    .range([42, 43, 44]);
  test.equal(s(new String("foo")), 42);
  test.equal(
    s({
      toString: function() {
        return "foo";
      }
    }),
    42
  );
  test.equal(
    s({
      toString: function() {
        return "bar";
      }
    }),
    43
  );
  test.end();
}
