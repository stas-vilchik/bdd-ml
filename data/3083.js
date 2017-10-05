{
  var s = d3_hierarchy.stratify(),
    o = {
      parentId: {
        toString: function() {
          return "a";
        }
      }
    },
    root = s([
      {
        id: "a"
      },
      o
    ]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 1,
    data: {
      id: "a"
    },
    children: [
      {
        depth: 1,
        height: 0,
        data: o
      }
    ]
  });
  test.end();
}
