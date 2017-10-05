{
  var s = scale
    .scaleSequential(function(t) {
      return t;
    })
    .domain([-1, 100, 200]);
  test.deepEqual(s.domain(), [-1, 100]);
  test.end();
}
