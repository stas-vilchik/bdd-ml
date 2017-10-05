{
  var p = scale
      .scalePoint()
      .domain(["foo", "bar"])
      .range([0, 960])
      .padding(0.5),
    b = scale
      .scaleBand()
      .domain(["foo", "bar"])
      .range([0, 960])
      .paddingInner(1)
      .paddingOuter(0.5);
  test.deepEqual(p.domain().map(p), b.domain().map(b));
  test.equal(p.bandwidth(), b.bandwidth());
  test.equal(p.step(), b.step());
  test.end();
}
