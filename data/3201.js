{
  function interpolate(a, b) {
    return function(t) {
      return [a, b, t];
    };
  }

  var s = scale
    .scaleLinear()
    .domain([10, 20])
    .range(["a", "b"])
    .interpolate(interpolate);
  test.equal(s.interpolate(), interpolate);
  test.deepEqual(s(15), ["a", "b", 0.5]);
  test.end();
}
