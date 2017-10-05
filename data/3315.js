{
  test.equal(
    scale
      .scalePow()
      .clamp(true)
      .range([10, 20])(2),
    20
  );
  test.equal(
    scale
      .scalePow()
      .clamp(true)
      .range([10, 20])(-1),
    10
  );
  test.end();
}
