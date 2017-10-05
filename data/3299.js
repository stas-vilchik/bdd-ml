{
  test.equal(
    scale
      .scalePow()
      .domain([1, 2])
      .range([0, 0])
      .invert(0),
    1
  );
  test.equal(
    scale
      .scalePow()
      .domain([2, 1])
      .range([0, 0])
      .invert(1),
    2
  );
  test.end();
}
