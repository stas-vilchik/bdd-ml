{
  x = 0;
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
  } catch (ex) {
    yield 6 + ex;
  }

  yield 7;
}