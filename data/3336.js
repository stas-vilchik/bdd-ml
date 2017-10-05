{
  var x = scale.scalePow(),
    y = x.copy();
  x.domain([1, 2]);
  test.deepEqual(y.domain(), [0, 1]);
  test.equal(x(1), 0);
  test.equal(y(1), 1);
  y.domain([2, 3]);
  test.equal(x(2), 1);
  test.equal(y(2), 0);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(y.domain(), [2, 3]);
  y = x.domain([1, 1.9]).copy();
  x.nice(5);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(y.domain(), [1, 1.9]);
  test.end();
}
