{
  var treemap = d3_hierarchy
      .treemap()
      .size([600, 400])
      .round(true),
    root = treemap(
      d3_hierarchy
        .hierarchy(simple)
        .sum(defaultValue)
        .sort(descendingValue)
    ),
    nodes = root.descendants().map(round);
  test.deepEqual(treemap.round(), true);
  test.deepEqual(nodes, [
    {
      x0: 0,
      x1: 600,
      y0: 0,
      y1: 400
    },
    {
      x0: 0,
      x1: 300,
      y0: 0,
      y1: 200
    },
    {
      x0: 0,
      x1: 300,
      y0: 200,
      y1: 400
    },
    {
      x0: 300,
      x1: 471,
      y0: 0,
      y1: 233
    },
    {
      x0: 471,
      x1: 600,
      y0: 0,
      y1: 233
    },
    {
      x0: 300,
      x1: 540,
      y0: 233,
      y1: 317
    },
    {
      x0: 300,
      x1: 540,
      y0: 317,
      y1: 400
    },
    {
      x0: 540,
      x1: 600,
      y0: 233,
      y1: 400
    }
  ]);
  test.end();
}
