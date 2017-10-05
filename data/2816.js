{
  try {
    yield* f();
  } catch (ex) {
    yield ex;
  }
}