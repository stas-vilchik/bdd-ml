{
  var x = scale.scaleThreshold();
  test.deepEqual(x.domain(), [0.5]);
  test.deepEqual(x.range(), [0, 1]);
  test.equal(x(0.5), 1);
  test.equal(x(0.49), 0);
  test.end();
}
