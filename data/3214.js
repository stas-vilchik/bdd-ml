{
  test.equal(scale.scaleLinear().tickFormat()(0.2), "0.2");
  test.equal(
    scale
      .scaleLinear()
      .domain([-100, 100])
      .tickFormat()(-20),
    "-20"
  );
  test.end();
}
