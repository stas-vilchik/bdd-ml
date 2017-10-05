{
  var s = scale.scaleIdentity().domain([1, 2]);
  test.equal(s.invert("2"), 2);
  test.end();
}
