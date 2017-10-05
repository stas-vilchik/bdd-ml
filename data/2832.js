{
  x = 0;
  yield 1;

  try {
    yield 2;
    yield 3;
  } finally {
    x = 4;
  }

  yield x;
}