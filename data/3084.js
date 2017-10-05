{
  var foo = function(d) {
      return d.foo;
    },
    s = d3_hierarchy.stratify().id(foo),
    root = s([
      {
        foo: "a"
      },
      {
        foo: "aa",
        parentId: "a"
      },
      {
        foo: "ab",
        parentId: "a"
      },
      {
        foo: "aaa",
        parentId: "aa"
      }
    ]);

  test.equal(s.id(), foo);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {
      foo: "a"
    },
    children: [
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {
          foo: "aa",
          parentId: "a"
        },
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {
              foo: "aaa",
              parentId: "aa"
            }
          }
        ]
      },
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {
          foo: "ab",
          parentId: "a"
        }
      }
    ]
  });
  test.end();
}
