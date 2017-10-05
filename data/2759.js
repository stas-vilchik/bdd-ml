{
  var fn1 = 1;
  var fn2 = 1;
  var reset;
  var tmp;

  while (1) {
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    [reset, tmp] = yield current;
    assert.equal(reset, tmp);

    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}