{
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([])
      .domain(),
    []
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([1, 0])
      .domain(),
    [1, 0]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([1, 2, 3])
      .domain(),
    [1, 2, 3]
  );
  test.end();
}
