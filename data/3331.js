{
  test.equal(scale.scalePow().tickFormat()(0.2), "0.2");
  test.equal(
    scale
      .scalePow()
      .domain([-100, 100])
      .tickFormat()(-20),
    "-20"
  );
  test.end();
}
