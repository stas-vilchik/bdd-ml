{
  for (var x = 0; x < 5; x = yield 'inc') {
    yield x;
  }
}