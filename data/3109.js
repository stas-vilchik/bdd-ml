{
  var treemap = d3_hierarchy
      .treemap()
      .size([6, 4])
      .tile(d3_hierarchy.treemapSlice),
    root = treemap(
      d3_hierarchy
        .hierarchy(simple)
        .sum(defaultValue)
        .sort(descendingValue)
    ),
    nodes = root.descendants().map(round);
  test.equal(treemap.tile(), d3_hierarchy.treemapSlice);
  test.deepEqual(nodes, [
    {
      x0: 0.0,
      x1: 6.0,
      y0: 0.0,
      y1: 4.0
    },
    {
      x0: 0.0,
      x1: 6.0,
      y0: 0.0,
      y1: 1.0
    },
    {
      x0: 0.0,
      x1: 6.0,
      y0: 1.0,
      y1: 2.0
    },
    {
      x0: 0.0,
      x1: 6.0,
      y0: 2.0,
      y1: 2.67
    },
    {
      x0: 0.0,
      x1: 6.0,
      y0: 2.67,
      y1: 3.17
    },
    {
      x0: 0.0,
      x1: 6.0,
      y0: 3.17,
      y1: 3.5
    },
    {
      x0: 0.0,
      x1: 6.0,
      y0: 3.5,
      y1: 3.83
    },
    {
      x0: 0.0,
      x1: 6.0,
      y0: 3.83,
      y1: 4.0
    }
  ]);
  test.end();
}
