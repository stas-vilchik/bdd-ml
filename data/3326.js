{
  var s = scale.scalePow();
  test.deepEqual(s.ticks(10).map(roundEpsilon), [
    0.0,
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1.0
  ]);
  test.deepEqual(s.ticks(9).map(roundEpsilon), [
    0.0,
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1.0
  ]);
  test.deepEqual(s.ticks(8).map(roundEpsilon), [
    0.0,
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1.0
  ]);
  test.deepEqual(s.ticks(7).map(roundEpsilon), [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]);
  test.deepEqual(s.ticks(6).map(roundEpsilon), [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]);
  test.deepEqual(s.ticks(5).map(roundEpsilon), [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]);
  test.deepEqual(s.ticks(4).map(roundEpsilon), [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]);
  test.deepEqual(s.ticks(3).map(roundEpsilon), [0.0, 0.5, 1.0]);
  test.deepEqual(s.ticks(2).map(roundEpsilon), [0.0, 0.5, 1.0]);
  test.deepEqual(s.ticks(1).map(roundEpsilon), [0.0, 1.0]);
  s.domain([-100, 100]);
  test.deepEqual(s.ticks(10), [
    -100,
    -80,
    -60,
    -40,
    -20,
    0,
    20,
    40,
    60,
    80,
    100
  ]);
  test.deepEqual(s.ticks(9), [
    -100,
    -80,
    -60,
    -40,
    -20,
    0,
    20,
    40,
    60,
    80,
    100
  ]);
  test.deepEqual(s.ticks(8), [
    -100,
    -80,
    -60,
    -40,
    -20,
    0,
    20,
    40,
    60,
    80,
    100
  ]);
  test.deepEqual(s.ticks(7), [
    -100,
    -80,
    -60,
    -40,
    -20,
    0,
    20,
    40,
    60,
    80,
    100
  ]);
  test.deepEqual(s.ticks(6), [-100, -50, 0, 50, 100]);
  test.deepEqual(s.ticks(5), [-100, -50, 0, 50, 100]);
  test.deepEqual(s.ticks(4), [-100, -50, 0, 50, 100]);
  test.deepEqual(s.ticks(3), [-100, -50, 0, 50, 100]);
  test.deepEqual(s.ticks(2), [-100, 0, 100]);
  test.deepEqual(s.ticks(1), [0]);
  test.end();
}
