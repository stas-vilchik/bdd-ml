{
  var x = 0;

  while (yield 'test') {
    yield x++;
  }
}