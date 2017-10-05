{
  var s = scale
    .scaleSequential(function(t) {
      return t;
    })
    .clamp(true);
  test.equal(s.clamp(), true);
  test.equal(s(-0.5), 0.0);
  test.equal(s(0.0), 0.0);
  test.equal(s(0.5), 0.5);
  test.equal(s(1.0), 1.0);
  test.equal(s(1.5), 1.0);
  test.end();
}
