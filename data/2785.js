{
  try {
    yield 1;
    yield 2;
  } finally {
    x = 10;
  }
}