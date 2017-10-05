{
  test.ok(
    isNaN(
      scale
        .scalePow()
        .range(["#000", "#fff"])
        .invert("#999")
    )
  );
  test.ok(
    isNaN(
      scale
        .scalePow()
        .range([0, "#fff"])
        .invert("#999")
    )
  );
  test.end();
}
