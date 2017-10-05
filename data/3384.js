{
  var a = {},
    b = {},
    c = {},
    x = scale
      .scaleThreshold()
      .domain([1 / 3, 2 / 3])
      .range([a, b, c]);
  test.deepEqual(x.invertExtent(a), [undefined, 1 / 3]);
  test.deepEqual(x.invertExtent(b), [1 / 3, 2 / 3]);
  test.deepEqual(x.invertExtent(c), [2 / 3, undefined]);
  test.deepEqual(x.invertExtent({}), [undefined, undefined]);
  test.end();
}
