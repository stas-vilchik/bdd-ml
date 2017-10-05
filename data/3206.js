{
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0, 0])
      .nice(10)
      .domain(),
    [0, 0]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0.5, 0.5])
      .nice(10)
      .domain(),
    [0.5, 0.5]
  );
  test.end();
}
