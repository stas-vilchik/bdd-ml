{
  var s = d3_hierarchy.stratify();
  test.throws(function() {
    s([
      {
        id: "a"
      },
      {
        id: "b",
        parentId: "c"
      }
    ]);
  }, /\bmissing\b/);
  test.end();
}
