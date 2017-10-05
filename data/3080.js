{
  var s = d3_hierarchy.stratify(),
    root = s([
      {
        id: "a"
      },
      {
        parentId: "a"
      },
      {
        parentId: "a"
      }
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
        data: {
          parentId: "a"
        }
      },
      {
        depth: 1,
        height: 0,
        data: {
          parentId: "a"
        }
      }
    ]
  });
  test.end();
}
