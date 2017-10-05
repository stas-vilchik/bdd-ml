{
  var treemap = d3_hierarchy.treemap().padding("42");
  test.strictEqual(treemap.padding()(), 42);
  test.strictEqual(treemap.paddingInner()(), 42);
  test.strictEqual(treemap.paddingOuter()(), 42);
  test.strictEqual(treemap.paddingTop()(), 42);
  test.strictEqual(treemap.paddingRight()(), 42);
  test.strictEqual(treemap.paddingBottom()(), 42);
  test.strictEqual(treemap.paddingLeft()(), 42);
  test.end();
}
