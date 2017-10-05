{
  test.equal(scale.scalePow().range(["red", "blue"])(0.5), "rgb(128, 0, 128)");
  test.equal(
    scale.scalePow().range(["#ff0000", "#0000ff"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.equal(scale.scalePow().range(["#f00", "#00f"])(0.5), "rgb(128, 0, 128)");
  test.equal(
    scale.scalePow().range(["rgb(255,0,0)", "hsl(240,100%,50%)"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.equal(
    scale.scalePow().range(["rgb(100%,0%,0%)", "hsl(240,100%,50%)"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.equal(
    scale.scalePow().range(["hsl(0,100%,50%)", "hsl(240,100%,50%)"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.end();
}
