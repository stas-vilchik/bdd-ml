{
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 0])
      .range([1, 2])(0),
    1
  );
  test.equal(
    scale
      .scaleLinear()
      .domain([0, 0])
      .range([2, 1])(1),
    2
  );
  test.end();
}
