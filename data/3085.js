{
  var s = d3_hierarchy.stratify();
  test.throws(function() {
    s.id(42);
  });
  test.throws(function() {
    s.id(null);
  });
  test.end();
}
