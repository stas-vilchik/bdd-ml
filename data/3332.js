{
  test.equal(scale.scalePow().tickFormat(10)(0.2), "0.2");
  test.equal(scale.scalePow().tickFormat(20)(0.2), "0.20");
  test.equal(
    scale
      .scalePow()
      .domain([-100, 100])
      .tickFormat(10)(-20),
    "-20"
  );
  test.end();
}
