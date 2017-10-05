{
  test.deepEqual(
    scale
      .scalePow()
      .domain([new Date(1990, 0, 1), new Date(1991, 0, 1)])
      .domain(),
    [631180800000, 662716800000]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain(["0.0", "1.0"])
      .domain(),
    [0, 1]
  );
  test.deepEqual(
    scale
      .scalePow()
      .domain([new Number(0), new Number(1)])
      .domain(),
    [0, 1]
  );
  test.end();
}
