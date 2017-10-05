{
  test.equal(
    scale
      .scaleLinear()
      .range(["0", "2"])
      .invert("1"),
    0.5
  );
  test.equal(
    scale
      .scaleLinear()
      .range([new Date(1990, 0, 1), new Date(1991, 0, 1)])
      .invert(new Date(1990, 6, 2, 13)),
    0.5
  );
  test.end();
}
