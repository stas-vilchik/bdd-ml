{
  var a = {},
    b = {},
    c = {},
    s = scale.scaleQuantize().range([a, b, c]);
  test.equal(s(0.0), a);
  test.equal(s(0.2), a);
  test.equal(s(0.4), b);
  test.equal(s(0.6), b);
  test.equal(s(0.8), c);
  test.equal(s(1.0), c);
  test.end();
}
