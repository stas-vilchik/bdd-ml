{
  var treemap = d3_hierarchy.treemap().size([6, 4]),
    root = treemap(
      d3_hierarchy
        .hierarchy(simple)
        .sum(defaultValue)
        .sort(descendingValue)
    ),
    nodes = root.descendants().map(round);
  test.deepEqual(treemap.size(), [6, 4]);
  test.deepEqual(nodes, [
    {
      x0: 0.0,
      x1: 6.0,
      y0: 0.0,
      y1: 4.0
    },
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
      x1: 5.4,
      y0: 2.33,
      y1: 3.17
    },
    {
      x0: 3.0,
      x1: 5.4,
      y0: 3.17,
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
