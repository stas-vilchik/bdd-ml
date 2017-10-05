{
  var s = scale.scaleLog().base(Math.E);
  test.deepEqual(
    s
      .domain([0.1, 100])
      .ticks()
      .map(round),
    [
      0.135335283237,
      0.367879441171,
      1,
      2.718281828459,
      7.389056098931,
      20.085536923188,
      54.598150033144
    ]
  );
  test.end();
}
