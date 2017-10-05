{
  var r = [1, 2],
    s = scale.scalePow().range(r);
  test.deepEqual(s.range(), [1, 2]);
  r.push(3);
  test.deepEqual(s.range(), [1, 2]);
  test.deepEqual(r, [1, 2, 3]);
  test.end();
}
