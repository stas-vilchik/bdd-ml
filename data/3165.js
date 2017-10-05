{
  var s = scale.scaleIdentity().range(["0", "2"]);
  test.equal(s.invert("1"), 1);
  s.range([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.equal(s.invert(new Date(1990, 6, 2, 13)), +new Date(1990, 6, 2, 13));
  s.range(["#000", "#fff"]);
  test.ok(isNaN(s.invert("#999")));
  test.end();
}
