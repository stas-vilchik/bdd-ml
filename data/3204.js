{
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0, 0.96])
      .nice(10)
      .domain(),
    [0, 1]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0, 96])
      .nice(10)
      .domain(),
    [0, 100]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0.96, 0])
      .nice(10)
      .domain(),
    [1, 0]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([96, 0])
      .nice(10)
      .domain(),
    [100, 0]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0, -0.96])
      .nice(10)
      .domain(),
    [0, -1]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([0, -96])
      .nice(10)
      .domain(),
    [0, -100]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([-0.96, 0])
      .nice(10)
      .domain(),
    [-1, 0]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([-96, 0])
      .nice(10)
      .domain(),
    [-100, 0]
  );
  test.deepEqual(
    scale
      .scaleLinear()
      .domain([-0.1, 51.1])
      .nice(8)
      .domain(),
    [-10, 60]
  );
  test.end();
}
