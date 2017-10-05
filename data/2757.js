{
  var fn1 = 1;
  var fn2 = 1;
  var reset;

  while (1) {
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    reset = yield current;

    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}