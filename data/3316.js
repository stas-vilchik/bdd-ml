{
  test.equal(
    scale
      .scalePow()
      .clamp(true)
      .range([10, 20])
      .invert(30),
    1
  );
  test.equal(
    scale
      .scalePow()
      .clamp(true)
      .range([10, 20])
      .invert(0),
    0
  );
  test.end();
}
