{
  var s = d3_hierarchy.stratify(),
    root = s([
      {
        id: "a",
        parentId: null
      },
      {
        id: "b",
        parentId: "a"
      },
      {
        id: "b",
        parentId: "a"
      }
    ]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 1,
    data: {
      id: "a",
      parentId: null
    },
    children: [
      {
        id: "b",
        depth: 1,
        height: 0,
        data: {
          id: "b",
          parentId: "a"
        }
      },
      {
        id: "b",
        depth: 1,
        height: 0,
        data: {
          id: "b",
          parentId: "a"
        }
      }
    ]
  });
  test.end();
}
