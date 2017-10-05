{
  var range = [1, 2],
    s = scale.scaleBand().range(range);
  range.push("blue");
  test.deepEqual(s.range(), [1, 2]);
  test.end();
}
