{
  var x = 1;
  var y = 2;

  label: while (true) {
    x++;

    while (true) {
      yield x * y;
      y++;

      if (y == 3) {
        continue label;
      }

      yield x * y * 5;

      if (y == 4) {
        break label;
      }

      yield x * y * 13;
    }

    yield x * y * 11;
  }

  yield x * y * 7;
}