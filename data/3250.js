{
  var s = scale.scaleLog();
  test.deepEqual(
    s
      .domain([-1e-1, -1e1])
      .ticks()
      .map(round),
    [
      -10,
      -9,
      -8,
      -7,
      -6,
      -5,
      -4,
      -3,
      -2,
      -1,
      -0.9,
      -0.8,
      -0.7,
      -0.6,
      -0.5,
      -0.4,
      -0.3,
      -0.2,
      -0.1
    ].reverse()
  );
  test.deepEqual(
    s
      .domain([-1e-1, -1])
      .ticks()
      .map(round),
    [-1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1].reverse()
  );
  test.deepEqual(
    s
      .domain([1, 1e-1])
      .ticks()
      .map(round),
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].reverse()
  );
  test.end();
}
