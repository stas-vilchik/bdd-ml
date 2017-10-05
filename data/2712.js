{
  var a = 1,
      b = 1;

  for (var i = 0; i < 4; i++) {
    var t0 = b;
    var t1 = a + b;
    a = t0;
    b = t1;
    yield a;
  }
}