{
  var treemap = d3_hierarchy
      .treemap()
      .size([6, 4])
      .paddingOuter(0.5),
    root = treemap(
      d3_hierarchy
        .hierarchy(simple)
        .sum(defaultValue)
        .sort(descendingValue)
    ),
    nodes = root.descendants().map(round);
  test.strictEqual(treemap.paddingOuter()(), 0.5);
  test.strictEqual(treemap.paddingTop()(), 0.5);
  test.strictEqual(treemap.paddingRight()(), 0.5);
  test.strictEqual(treemap.paddingBottom()(), 0.5);
  test.strictEqual(treemap.paddingLeft()(), 0.5);
  test.deepEqual(treemap.size(), [6, 4]);
  test.deepEqual(nodes, [
    {
      x0: 0.0,
      x1: 6.0,
      y0: 0.0,
      y1: 4.0
    },
    {
      x0: 0.5,
      x1: 3.0,
      y0: 0.5,
      y1: 2.0
    },
    {
      x0: 0.5,
      x1: 3.0,
      y0: 2.0,
      y1: 3.5
    },
    {
      x0: 3.0,
      x1: 4.43,
      y0: 0.5,
      y1: 2.25
    },
    {
      x0: 4.43,
      x1: 5.5,
      y0: 0.5,
      y1: 2.25
    },
    {
      x0: 3.0,
      x1: 5.0,
      y0: 2.25,
      y1: 2.88
    },
    {
      x0: 3.0,
      x1: 5.0,
      y0: 2.88,
      y1: 3.5
    },
    {
      x0: 5.0,
      x1: 5.5,
      y0: 2.25,
      y1: 3.5
    }
  ]);
  test.end();
}
