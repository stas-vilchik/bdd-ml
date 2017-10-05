{
  var x = scale
    .scalePow()
    .exponent(0.5)
    .domain([1, 20])
    .clamp(true);
  test.equal(x.invert(0), 1);
  test.equal(x.invert(1), 20);
  test.end();
}
