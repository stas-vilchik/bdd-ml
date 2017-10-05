{
  var s = d3_hierarchy.stratify();
  test.throws(function() {
    s.parentId(42);
  });
  test.throws(function() {
    s.parentId(null);
  });
  test.end();
}
