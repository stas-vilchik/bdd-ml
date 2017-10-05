{
  if (condition) {
    yield 1;
  }

  if (!condition) {
    yield 2;
  }

  if (condition) {
    yield 3;
  } else {
    yield 4;
  }
}