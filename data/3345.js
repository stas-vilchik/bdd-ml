{
  var s = scale
    .scaleQuantile()
    .domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20])
    .range([0, 1, 2, 3]);
  test.equal(s(NaN), undefined);
  test.end();
}
