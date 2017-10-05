{
  var s = d3_hierarchy.stratify();
  test.throws(function() {
    s([
      {
        id: "a"
      },
      {
        id: "b",
        parentId: "a"
      },
      {
        id: "b",
        parentId: "a"
      },
      {
        id: "c",
        parentId: "b"
      }
    ]);
  }, /\bambiguous\b/);
  test.end();
}
