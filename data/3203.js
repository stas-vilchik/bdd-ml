{
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0, 0.96])
      .nice()
      .domain(),
    [0, 1]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0, 96])
      .nice()
      .domain(),
    [0, 100]
  );
  test.end();
}
