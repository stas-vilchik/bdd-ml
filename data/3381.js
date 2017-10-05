{
  var x = scale
    .scaleThreshold()
    .domain([1 / 3, 2 / 3])
    .range(["a", "b", "c"]);
  test.equal(x(), undefined);
  test.equal(x(undefined), undefined);
  test.equal(x(NaN), undefined);
  test.equal(x(null), "a");
  test.end();
}
