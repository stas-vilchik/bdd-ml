{
  test.equal(
    scale.scaleLinear().range(["red", "blue"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.equal(
    scale.scaleLinear().range(["#ff0000", "#0000ff"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.equal(
    scale.scaleLinear().range(["#f00", "#00f"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.equal(
    scale.scaleLinear().range(["rgb(255,0,0)", "hsl(240,100%,50%)"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.equal(
    scale.scaleLinear().range(["rgb(100%,0%,0%)", "hsl(240,100%,50%)"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.equal(
    scale.scaleLinear().range(["hsl(0,100%,50%)", "hsl(240,100%,50%)"])(0.5),
    "rgb(128, 0, 128)"
  );
  test.end();
}
