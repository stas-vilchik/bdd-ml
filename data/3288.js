{
  var p = scale
      .scalePoint()
      .domain(["foo", "bar"])
      .range([0, 960]),
    b = scale
      .scaleBand()
      .domain(["foo", "bar"])
      .range([0, 960])
      .paddingInner(1);
  test.deepEqual(p.domain().map(p), b.domain().map(b));
  test.equal(p.bandwidth(), b.bandwidth());
  test.equal(p.step(), b.step());
  test.end();
}
