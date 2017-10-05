{
  var foo = function(d) {
      return d.foo;
    },
    s = d3_hierarchy.stratify().parentId(foo),
    root = s([
      {
        id: "a"
      },
      {
        id: "aa",
        foo: "a"
      },
      {
        id: "ab",
        foo: "a"
      },
      {
        id: "aaa",
        foo: "aa"
      }
    ]);

  test.equal(s.parentId(), foo);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {
      id: "a"
    },
    children: [
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {
          id: "aa",
          foo: "a"
        },
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {
              id: "aaa",
              foo: "aa"
            }
          }
        ]
      },
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {
          id: "ab",
          foo: "a"
        }
      }
    ]
  });
  test.end();
}
