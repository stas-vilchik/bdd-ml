{
  var i;

  function* f() {
    for (i = 0; i < 8; i++) {
      yield i;
    }
  }

  var x, x2, xs;
  [, x, , x2, , ...xs] = f();
  assert.equal(1, x);
  assert.equal(3, x2);
  assertArrayEquals([5, 6, 7], xs);
  [] = f();
  assert.equal(8, i);
  x = -1;
  [x] = f();
  assert.equal(0, x);
  assert.equal(0, i);
}
