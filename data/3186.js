{
  test.ok(
    isNaN(
      scale
        .scaleLinear()
        .range(["#000", "#fff"])
        .invert("#999")
    )
  );
  test.ok(
    isNaN(
      scale
        .scaleLinear()
        .range([0, "#fff"])
        .invert("#999")
    )
  );
  test.end();
}
