{
  var s = scale.scaleLinear();
  test.deepEqual(s.domain(), [0, 1]);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s.clamp(), false);
  test.deepEqual(
    s.interpolate()(
      {
        array: ["red"]
      },
      {
        array: ["blue"]
      }
    )(0.5),
    {
      array: ["rgb(128, 0, 128)"]
    }
  );
  test.end();
}
