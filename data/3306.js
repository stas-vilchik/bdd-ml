{
  var d = [1, 2],
    s = scale.scalePow().domain(d);
  test.deepEqual(s.domain(), [1, 2]);
  d.push(3);
  test.deepEqual(s.domain(), [1, 2]);
  test.deepEqual(d, [1, 2, 3]);
  test.end();
}
