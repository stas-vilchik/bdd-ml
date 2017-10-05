{
  test.equal(
    scale
      .scalePow()
      .domain([-10, 0])
      .range(["red", "white", "green"])
      .clamp(true)(-5),
    "rgb(255, 128, 128)"
  );
  test.equal(
    scale
      .scalePow()
      .domain([-10, 0])
      .range(["red", "white", "green"])
      .clamp(true)(50),
    "rgb(255, 255, 255)"
  );
  test.end();
}
