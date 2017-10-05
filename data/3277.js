{
  var range = ["red", "green"],
    s = scale.scaleOrdinal().range(range);
  range.push("blue");
  test.deepEqual(s.range(), ["red", "green"]);
  test.end();
}
