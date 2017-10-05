{
  var s = scale.scalePow(),
    r = s.range();
  test.deepEqual(r, [0, 1]);
  r.push(3);
  test.deepEqual(s.range(), [0, 1]);
  test.end();
}
