{
  test.deepEqual(
    scale.scaleLinear().range([
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
  test.deepEqual(scale.scaleLinear().range([["red"], ["blue"]])(0.5), [
    "rgb(128, 0, 128)"
  ]);
  test.end();
}
