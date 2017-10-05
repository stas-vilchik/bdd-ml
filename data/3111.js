{
  var treemap = d3_hierarchy.treemap(),
    root = treemap(
      d3_hierarchy
        .hierarchy(simple)
        .sum(defaultValue)
        .sort(ascendingValue)
    );
  test.deepEqual(
    root.descendants().map(function(d) {
      return d.value;
    }),
    [24, 1, 2, 2, 3, 4, 6, 6]
  );
  test.end();
}
