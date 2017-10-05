{
  try {
    yield 1;
  } catch (ex) {
    yield ex;
  } finally {
    yield 2;
  }

  yield 3;
}