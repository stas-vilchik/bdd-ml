{
  var x = scale
    .scalePow()
    .domain([1, 2])
    .range([3, 4]);
  x.exponent(0.5);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(x.range(), [3, 4]);
  x.exponent(2);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(x.range(), [3, 4]);
  x.exponent(-1);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(x.range(), [3, 4]);
  test.end();
}
