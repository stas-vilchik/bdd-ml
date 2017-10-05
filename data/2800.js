{
  try {
    yield 1;
  } catch (ex) {
    yield ex;
  } finally {
    return 2;
  }

  yield 3;
}