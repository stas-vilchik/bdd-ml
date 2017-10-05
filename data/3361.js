{
  var s = scale.scaleQuantize().domain([-1, 100, 200]);
  test.deepEqual(s.domain(), [-1, 100]);
  test.end();
}
