{
  var s = scale.scaleOrdinal().range(["red", "green"]),
    range = s.range();
  test.deepEqual(range, ["red", "green"]);
  range.push("blue");
  test.deepEqual(s.range(), ["red", "green"]);
  test.end();
}
