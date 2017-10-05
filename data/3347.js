{
  var s = scale.scaleQuantile().domain(["6", "13", "20"]);
  test.deepEqual(s.domain(), [6, 13, 20]);
  test.end();
}
