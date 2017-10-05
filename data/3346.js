{
  var s = scale.scaleQuantile().domain([6, 3, 7, 8, 8, 13, 20, 15, 16, 10]);
  test.deepEqual(s.domain(), [3, 6, 7, 8, 8, 10, 13, 15, 16, 20]);
  test.end();
}
