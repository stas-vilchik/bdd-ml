{
  x = 0;
  y = 0;
  yield 1;

  try {
    yield 2;

    try {
      yield 3;
    } catch (ex) {
      yield 4 + ex;
    } finally {
      x = 5;
    }

    yield x;
  } finally {
    y = 6;
  }

  yield y;
}