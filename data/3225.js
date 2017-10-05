{
  var x = scale.scaleLog();
  test.deepEqual(x.domain(), [1, 10]);
  test.deepEqual(x.range(), [0, 1]);
  test.equal(x.clamp(), false);
  test.equal(x.base(), 10);
  test.equal(x.interpolate(), interpolate.interpolate);
  test.deepEqual(
    x.interpolate()(
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
  test.inDelta(x(5), 0.69897);
  test.inDelta(x.invert(0.69897), 5);
  test.inDelta(x(3.162278), 0.5);
  test.inDelta(x.invert(0.5), 3.162278);
  test.end();
}
