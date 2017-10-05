{
  var treemap = d3_hierarchy.treemap();
  test.equal(treemap.tile(), d3_hierarchy.treemapSquarify);
  test.deepEqual(treemap.size(), [1, 1]);
  test.deepEqual(treemap.round(), false);
  test.end();
}
