{
  test.deepEqual(
    scale.scalePow().range([
      {
        color: "red"
      },
      {
        color: "blue"
      }
    ])(0.5),
    {
      color: "rgb(128, 0, 128)"
    }
  );
  test.deepEqual(scale.scalePow().range([["red"], ["blue"]])(0.5), [
    "rgb(128, 0, 128)"
  ]);
  test.end();
}
