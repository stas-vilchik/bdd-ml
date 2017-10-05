{
  var s = scale.scaleIdentity().domain([1, 2]);
  test.equal(s("2"), 2);
  test.end();
}
