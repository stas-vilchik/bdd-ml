{
  yield 1;

  try {
    yield 2;
  } catch (e) {
    return 3;
  }
}