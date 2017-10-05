{
  var treemap = d3_hierarchy.treemap().round("yes");
  test.strictEqual(treemap.round(), true);
  test.end();
}
