{
  var x = 0;

  for (yield 'init'; x < 3; x++) {
    yield x;
  }
}