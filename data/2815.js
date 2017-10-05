{
  try {
    yield* [4, 5, 6];
  } catch (ex) {
    if (ex instanceof TypeError) {
      yield 10;
    }
  }
}