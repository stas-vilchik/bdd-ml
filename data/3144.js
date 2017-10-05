{
  var s = scale.scaleBand().range({
    0: "1.0",
    1: "2.0",
    length: 2
  });
  test.deepEqual(s.range(), [1, 2]);
  test.end();
}
