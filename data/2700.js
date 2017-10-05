{
  label1: {
    x += 'a';
    yield 1;
    x += 'b';

    while (true && true) {
      break label1;
    }

    x += 'c';
  }

  x += 'd';
}