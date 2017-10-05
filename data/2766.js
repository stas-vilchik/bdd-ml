{
  try {
    yield 1;
    yield 2;
  } catch (e) {
    yield '(' + e + ')';
  }

  yield 3;
}