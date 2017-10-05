{
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([12, 87])
      .nice(5)
      .domain(),
    [0, 100]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([12, 87])
      .nice(10)
      .domain(),
    [10, 90]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([12, 87])
      .nice(100)
      .domain(),
    [12, 87]
  );
  test.end();
}
