{
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 1e6])
      .tickFormat(10, "$s")(0.51e6),
    "$0.5M"
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 1e6])
      .tickFormat(100, "$s")(0.501e6),
    "$0.50M"
  );
  test.end();
}
