{
  var s = d3_hierarchy.stratify();
  test.throws(function() {
    s([
      {
        id: "a"
      },
      {
        id: "b"
      }
    ]);
  }, /\bmultiple roots\b/);
  test.throws(function() {
    s([
      {
        id: "a",
        parentId: "a"
      }
    ]);
  }, /\bno root\b/);
  test.throws(function() {
    s([
      {
        id: "a",
        parentId: "b"
      },
      {
        id: "b",
        parentId: "a"
      }
    ]);
  }, /\bno root\b/);
  test.end();
}
