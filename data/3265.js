{
  var x = scale.scaleLog();
  test.deepEqual(x.domain([0, 1]).ticks(), []);
  test.deepEqual(x.domain([1, 0]).ticks(), []);
  test.deepEqual(x.domain([0, -1]).ticks(), []);
  test.deepEqual(x.domain([-1, 0]).ticks(), []);
  test.deepEqual(x.domain([-1, 1]).ticks(), []);
  test.deepEqual(x.domain([0, 0]).ticks(), []);
  test.end();
}
