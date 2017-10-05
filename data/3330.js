{
  var s = scale.scalePow();
  test.deepEqual(s.ticks(), s.ticks(10));
  test.end();
}
