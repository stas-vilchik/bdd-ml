{
  var x = 0;

  while ((yield 'a') || (yield 'b')) {
    yield x++;
  }
}