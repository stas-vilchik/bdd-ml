{
  var s = scale.scaleOrdinal().domain([0, 1]);
  test.deepEqual(s.domain(), [0, 1]);
  test.equal(typeof s.domain()[0], "number");
  test.equal(typeof s.domain()[1], "number");
  test.end();
}
