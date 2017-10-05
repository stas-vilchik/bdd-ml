{
  var tile = d3_hierarchy.treemapSliceDice,
    root = {
      depth: 2,
      value: 24,
      children: [
        {
          value: 6
        },
        {
          value: 6
        },
        {
          value: 4
        },
        {
          value: 3
        },
        {
          value: 2
        },
        {
          value: 2
        },
        {
          value: 1
        }
      ]
    };
  tile(root, 0, 0, 4, 6);
  test.deepEqual(root.children.map(round), [
    {
      x0: 0.0,
      x1: 1.0,
      y0: 0.0,
      y1: 6.0
    },
    {
      x0: 1.0,
      x1: 2.0,
      y0: 0.0,
      y1: 6.0
    },
    {
      x0: 2.0,
      x1: 2.67,
      y0: 0.0,
      y1: 6.0
    },
    {
      x0: 2.67,
      x1: 3.17,
      y0: 0.0,
      y1: 6.0
    },
    {
      x0: 3.17,
      x1: 3.5,
      y0: 0.0,
      y1: 6.0
    },
    {
      x0: 3.5,
      x1: 3.83,
      y0: 0.0,
      y1: 6.0
    },
    {
      x0: 3.83,
      x1: 4.0,
      y0: 0.0,
      y1: 6.0
    }
  ]);
  test.end();
}
