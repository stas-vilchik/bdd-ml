{
  var s = scale.scaleLog();
  test.deepEqual(s.domain([1, 5]).ticks(), [1, 2, 3, 4, 5]);
  test.deepEqual(s.domain([5, 1]).ticks(), [5, 4, 3, 2, 1]);
  test.deepEqual(s.domain([-1, -5]).ticks(), [-1, -2, -3, -4, -5]);
  test.deepEqual(s.domain([-5, -1]).ticks(), [-5, -4, -3, -2, -1]);
  test.end();
}
