{
  var x = 0;

  do {
    yield x++;
  } while ((yield 'a') || (yield 'b'));
}