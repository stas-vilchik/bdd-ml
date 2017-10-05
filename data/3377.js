{
  var s1 = scale
      .scaleSequential(function(t) {
        return t;
      })
      .domain([1, 3])
      .clamp(true),
    s2 = s1.copy();
  test.deepEqual(s2.domain(), [1, 3]);
  test.equal(s2.clamp(), true);
  s1.domain([-1, 2]);
  test.deepEqual(s2.domain(), [1, 3]);
  s1.clamp(false);
  test.equal(s2.clamp(), true);
  s2.domain([3, 4]);
  test.deepEqual(s1.domain(), [-1, 2]);
  s2.clamp(true);
  test.deepEqual(s1.clamp(), false);
  test.end();
}
