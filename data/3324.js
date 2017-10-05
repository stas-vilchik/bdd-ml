{
  test.deepEqual(
    scale
      .scalePow()
      .domain([1.1, 1, 2, 3, 10.9])
      .nice(10)
      .domain(),
    [1, 1, 2, 3, 11]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([123.1, 1, 2, 3, -0.9])
      .nice(10)
      .domain(),
    [130, 1, 2, 3, -10]
  );
  test.end();
}
