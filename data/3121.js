{
  var tile = d3_hierarchy.treemapSlice,
    root = {
      value: 0,
      children: [
        {
          value: 0
        },
        {
          value: 0
        }
      ]
    };
  tile(root, 0, 0, 4, 0);
  test.deepEqual(root.children.map(round), [
    {
      x0: 0.0,
      x1: 4.0,
      y0: 0.0,
      y1: 0.0
    },
    {
      x0: 0.0,
      x1: 4.0,
      y0: 0.0,
      y1: 0.0
    }
  ]);
  test.end();
}
