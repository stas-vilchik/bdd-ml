{
  var a = {},
    b = {},
    c = {},
    s = scale.scaleQuantize().range([a, b, c]);
  test.equal(s(-0.5), a);
  test.equal(s(+1.5), c);
  test.end();
}
