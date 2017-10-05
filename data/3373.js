{
  var i = function(t) {
      return t;
    },
    s = scale.scaleSequential(i);

  test.deepEqual(s.domain(), [0, 1]);
  test.equal(s.interpolator(), i);
  test.equal(s.clamp(), false);
  test.equal(s(-0.5), -0.5);
  test.equal(s(0.0), 0.0);
  test.equal(s(0.5), 0.5);
  test.equal(s(1.0), 1.0);
  test.equal(s(1.5), 1.5);
  test.end();
}
