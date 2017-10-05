{
  yield 1;

  try {
    yield 2;
    yield 3;
  } catch (ex) {
    yield ex;
  }

  yield 4;
}