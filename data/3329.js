{
  var s = scale.scalePow();
  test.deepEqual(s.ticks(NaN), []);
  test.deepEqual(s.ticks(0), []);
  test.deepEqual(s.ticks(-1), []);
  test.deepEqual(s.ticks(Infinity), []);
  test.end();
}
