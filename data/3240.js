{
  var x = scale.scaleLog().domain([1, 32]);
  test.deepEqual(
    x
      .base(2)
      .ticks()
      .map(x.tickFormat()),
    ["1", "2", "4", "8", "16", "32"]
  );
  test.deepEqual(
    x
      .base(Math.E)
      .ticks()
      .map(x.tickFormat()),
    ["1", "2.71828182846", "7.38905609893", "20.0855369232"]
  );
  test.end();
}
