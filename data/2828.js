{
  x = 0;
  y = 0;
  yield 1;

  try {
    yield 2;

    try {
      yield 3;
    } finally {
      x = 4;
    }

    yield x;
  } catch (ex) {
    yield 5 + ex;
  } finally {
    y = 6;
  }

  yield y;
}