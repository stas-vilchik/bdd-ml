{
  var s = scale.scaleBand().range([1, 2]),
    range = s.range();
  test.deepEqual(range, [1, 2]);
  range.push("blue");
  test.deepEqual(s.range(), [1, 2]);
  test.end();
}
