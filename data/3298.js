{
  test.equal(
    scale
      .scalePow()
      .range([1, 2])
      .invert(1.5),
    0.5
  );
  test.end();
}
