{
  test.equal(scale.scaleLinear().clamp(), false);
  test.equal(scale.scaleLinear().range([10, 20])(2), 30);
  test.equal(scale.scaleLinear().range([10, 20])(-1), 0);
  test.equal(
    scale
      .scaleLinear()
      .range([10, 20])
      .invert(30),
    2
  );
  test.equal(
    scale
      .scaleLinear()
      .range([10, 20])
      .invert(0),
    -1
  );
  test.end();
}
