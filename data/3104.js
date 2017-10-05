{
  var treemap = d3_hierarchy
      .treemap()
      .size([6, 4])
      .paddingInner(0.5),
    root = treemap(
      d3_hierarchy
        .hierarchy(simple)
        .sum(defaultValue)
        .sort(descendingValue)
    ),
    nodes = root.descendants().map(round);
  test.strictEqual(treemap.paddingInner()(), 0.5);
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
      x1: 2.75,
      y0: 0.0,
      y1: 1.75
    },
    {
      x0: 0.0,
      x1: 2.75,
      y0: 2.25,
      y1: 4.0
    },
    {
      x0: 3.25,
      x1: 4.61,
      y0: 0.0,
      y1: 2.13
    },
    {
      x0: 5.11,
      x1: 6.0,
      y0: 0.0,
      y1: 2.13
    },
    {
      x0: 3.25,
      x1: 5.35,
      y0: 2.63,
      y1: 3.06
    },
    {
      x0: 3.25,
      x1: 5.35,
      y0: 3.56,
      y1: 4.0
    },
    {
      x0: 5.85,
      x1: 6.0,
      y0: 2.63,
      y1: 4.0
    }
  ]);
  test.end();
}
