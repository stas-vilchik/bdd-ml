{
  var s = scale.scaleLog().base(Math.E);
  test.deepEqual(
    s
      .domain([1e-1, 1e1])
      .ticks()
      .map(s.tickFormat()),
    ["0.135335283237", "0.367879441171", "1", "2.71828182846", "7.38905609893"]
  );
  test.end();
}
