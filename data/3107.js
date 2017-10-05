{
  var treemap = d3_hierarchy.treemap().size([
    "6",
    {
      valueOf: function() {
        return 4;
      }
    }
  ]);
  test.strictEqual(treemap.size()[0], 6);
  test.strictEqual(treemap.size()[1], 4);
  test.end();
}
