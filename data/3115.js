{
  var tile = d3_hierarchy.treemapResquarify.ratio(1),
    root = {
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
  tile(root, 0, 0, 6, 4);
  test.deepEqual(root.children.map(round), [
    {
      x0: 0.0,
      x1: 3.0,
      y0: 0.0,
      y1: 2.0
    },
    {
      x0: 0.0,
      x1: 3.0,
      y0: 2.0,
      y1: 4.0
    },
    {
      x0: 3.0,
      x1: 4.71,
      y0: 0.0,
      y1: 2.33
    },
    {
      x0: 4.71,
      x1: 6.0,
      y0: 0.0,
      y1: 2.33
    },
    {
      x0: 3.0,
      x1: 4.2,
      y0: 2.33,
      y1: 4.0
    },
    {
      x0: 4.2,
      x1: 5.4,
      y0: 2.33,
      y1: 4.0
    },
    {
      x0: 5.4,
      x1: 6.0,
      y0: 2.33,
      y1: 4.0
    }
  ]);
  test.end();
}
