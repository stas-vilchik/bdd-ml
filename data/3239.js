{
  var x = scale.scaleLog().range(["0", "2"]);
  test.inDelta(x.invert("1"), 3.1622777);
  x.range([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.inDelta(x.invert(new Date(1990, 6, 2, 13)), 3.1622777);
  x.range(["#000", "#fff"]);
  test.ok(Number.isNaN(x.invert("#999")));
  test.end();
}
