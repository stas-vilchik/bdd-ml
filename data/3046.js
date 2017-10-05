{
  if (error) throw error;
  var stratify = d3_hierarchy.stratify().parentId(function(d) {
    var i = d.id.lastIndexOf(".");
    return i >= 0 ? d.id.slice(0, i) : null;
  });
  var pack = d3_hierarchy.pack().size([960, 960]);
  var data = d3_dsv.csvParse(inputText),
    expected = JSON.parse(expectedText),
    actual = pack(
      stratify(data)
        .sum(function(d) {
          return d.value;
        })
        .sort(function(a, b) {
          return b.value - a.value || a.data.id.localeCompare(b.data.id);
        })
    );

  (function visit(node) {
    node.name = node.data.id.slice(node.data.id.lastIndexOf(".") + 1);
    node.x = round(node.x);
    node.y = round(node.y);
    node.r = round(node.r);
    delete node.id;
    delete node.parent;
    delete node.data;
    delete node.depth;
    delete node.height;
    if (node.children) node.children.forEach(visit);
  })(actual);

  (function visit(node) {
    node.x = round(node.x);
    node.y = round(node.y);
    node.r = round(node.r);
    if (node.children) node.children.forEach(visit);
  })(expected);

  test.deepEqual(actual, expected);
  test.end();
}
