{
  var s = d3_hierarchy.stratify(),
    root = s([
      {
        id: "aaa",
        parentId: "aa"
      },
      {
        id: "ab",
        parentId: "a"
      },
      {
        id: "aa",
        parentId: "a"
      },
      {
        id: "a"
      }
    ]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {
      id: "a"
    },
    children: [
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {
          id: "ab",
          parentId: "a"
        }
      },
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {
          id: "aa",
          parentId: "a"
        },
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {
              id: "aaa",
              parentId: "aa"
            }
          }
        ]
      }
    ]
  });
  test.end();
}
