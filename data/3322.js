{
  test.deepEqual(
    scale
      .scalePow()
      .domain([1.1, 10.9])
      .nice(10)
      .domain(),
    [1, 11]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([10.9, 1.1])
      .nice(10)
      .domain(),
    [11, 1]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([0.7, 11.001])
      .nice(10)
      .domain(),
    [0, 12]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([123.1, 6.7])
      .nice(10)
      .domain(),
    [130, 0]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([0, 0.49])
      .nice(10)
      .domain(),
    [0, 0.5]
  );
  test.end();
}
