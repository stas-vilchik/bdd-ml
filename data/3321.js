{
  test.deepEqual(
    scale
      .scalePow()
      .domain([0, 0.96])
      .nice(10)
      .domain(),
    [0, 1]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([0, 96])
      .nice(10)
      .domain(),
    [0, 100]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([0.96, 0])
      .nice(10)
      .domain(),
    [1, 0]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([96, 0])
      .nice(10)
      .domain(),
    [100, 0]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([0, -0.96])
      .nice(10)
      .domain(),
    [0, -1]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([0, -96])
      .nice(10)
      .domain(),
    [0, -100]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([-0.96, 0])
      .nice(10)
      .domain(),
    [-1, 0]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([-96, 0])
      .nice(10)
      .domain(),
    [-100, 0]
  );
  test.end();
}
