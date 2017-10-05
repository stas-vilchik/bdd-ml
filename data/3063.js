{
  var s = d3_hierarchy.stratify();
  test.equal(
    s.id()({
      id: "foo"
    }),
    "foo"
  );
  test.equal(
    s.parentId()({
      parentId: "bar"
    }),
    "bar"
  );
  test.end();
}
