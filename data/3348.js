{
  var s = scale.scaleQuantile().domain([1, 2, 0, 0, null]);
  test.deepEqual(s.domain(), [0, 0, 1, 2]);
  test.end();
}
