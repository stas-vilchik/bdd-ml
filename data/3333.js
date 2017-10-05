{
  test.equal(scale.scalePow().tickFormat(10, "+f")(0.2), "+0.2");
  test.equal(scale.scalePow().tickFormat(20, "+f")(0.2), "+0.20");
  test.equal(scale.scalePow().tickFormat(10, "+%")(0.2), "+20%");
  test.equal(
    scale
      .scalePow()
      .domain([0.19, 0.21])
      .tickFormat(10, "+%")(0.2),
    "+20.0%"
  );
  test.end();
}
