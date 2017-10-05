{
  var s = scale.scaleLinear();
  test.deepEqual(s.ticks(), s.ticks(10));
  test.end();
}
