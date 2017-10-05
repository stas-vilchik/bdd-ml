{
  var i = 1;
  yield i;
  i = 3;
  yield i + 1;
  {
    var x = 3;
    yield i + x;
    yield x;
  }
}