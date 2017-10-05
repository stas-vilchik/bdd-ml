{
  try {
    throw 1;
  } catch (e) {
    yield e;
    throw 2;
    yield 3;
  }
}