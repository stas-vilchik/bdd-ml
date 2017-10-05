{
  var i0 = function(t) {
      return t;
    },
    i1 = function(t) {
      return t * 2;
    },
    s = scale.scaleSequential(i0);

  test.equal(s.interpolator(), i0);
  test.equal(s.interpolator(i1), s);
  test.equal(s.interpolator(), i1);
  test.equal(s(-0.5), -1.0);
  test.equal(s(0.0), 0.0);
  test.equal(s(0.5), 1.0);
  test.end();
}
