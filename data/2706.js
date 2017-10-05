{
  var i = 0;

  do {
    if (++i % 2 == 0) continue;
    yield i;
  } while (i < 6);
}