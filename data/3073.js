{
  var s = d3_hierarchy.stratify();
  test.throws(function() {
    s([
      {
        id: "root"
      },
      {
        id: "a",
        parentId: "a"
      }
    ]);
  }, /\bcycle\b/);
  test.throws(function() {
    s([
      {
        id: "root"
      },
      {
        id: "a",
        parentId: "b"
      },
      {
        id: "b",
        parentId: "a"
      }
    ]);
  }, /\bcycle\b/);
  test.end();
}
