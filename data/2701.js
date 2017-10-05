{
  label1: {
    x += 'a';

    while (true) {
      x += 'b';

      label2: {
        x += 'c';
        yield 3;
        x += 'd';

        while (true) {
          break label1;
        }

        x += 'e';
      }

      x += 'f';
    }

    x += 'g';
  }

  x += 'h';
}