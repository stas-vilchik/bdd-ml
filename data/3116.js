{
  var root = {
    value: 20,
    children: [
      {
        value: 10
      },
      {
        value: 10
      }
    ]
  };
  d3_hierarchy.treemapResquarify(root, 0, 0, 20, 10);
  test.deepEqual(root.children.map(round), [
    {
      x0: 0,
      x1: 10,
      y0: 0,
      y1: 10
    },
    {
      x0: 10,
      x1: 20,
      y0: 0,
      y1: 10
    }
  ]);
  d3_hierarchy.treemapResquarify.ratio((1 + Math.sqrt(5)) / 2)(
    root,
    0,
    0,
    10,
    20
  );
  test.deepEqual(root.children.map(round), [
    {
      x0: 0,
      x1: 5,
      y0: 0,
      y1: 20
    },
    {
      x0: 5,
      x1: 10,
      y0: 0,
      y1: 20
    }
  ]);
  test.end();
}
