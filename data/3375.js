{
  var s = scale
    .scaleSequential(function(t) {
      return t;
    })
    .domain(["-1.20", "2.40"]);
  test.deepEqual(s.domain(), [-1.2, 2.4]);
  test.equal(s(-1.2), 0.0);
  test.equal(s(0.6), 0.5);
  test.equal(s(2.4), 1.0);
  test.end();
}
