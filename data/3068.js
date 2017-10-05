{
  var s = d3_hierarchy.stratify(),
    root = s([
      {
        id: 0,
        parentId: null
      },
      {
        id: 1,
        parentId: 0
      },
      {
        id: 2,
        parentId: 0
      }
    ]);
  test.deepEqual(noparent(root), {
    id: "0",
    depth: 0,
    height: 1,
    data: {
      id: 0,
      parentId: null
    },
    children: [
      {
        id: "1",
        depth: 1,
        height: 0,
        data: {
          id: 1,
          parentId: 0
        }
      },
      {
        id: "2",
        depth: 1,
        height: 0,
        data: {
          id: 2,
          parentId: 0
        }
      }
    ]
  });
  test.end();
}
