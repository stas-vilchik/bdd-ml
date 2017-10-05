{
  test.deepEqual(
    scale
      .scalePow()
      .domain([])
      .domain(),
    []
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([1, 0])
      .domain(),
    [1, 0]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([1, 2, 3])
      .domain(),
    [1, 2, 3]
  );
  test.end();
}
