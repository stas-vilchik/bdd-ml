{
  var s1 = scale.scaleIdentity(),
    s2 = s1.copy(),
    s3 = s1.copy();
  s1.domain([1, 2]);
  test.deepEqual(s2.domain(), [0, 1]);
  s2.domain([2, 3]);
  test.deepEqual(s1.domain(), [1, 2]);
  test.deepEqual(s2.domain(), [2, 3]);
  s2 = s3.copy();
  s3.range([1, 2]);
  test.deepEqual(s2.range(), [0, 1]);
  s2.range([2, 3]);
  test.deepEqual(s3.range(), [1, 2]);
  test.deepEqual(s2.range(), [2, 3]);
  test.end();
}
