{
  try {
    yield 1;
    yield 2;
  } finally {
    yield 3333;
    f11.x = 10;
    yield 4;
  }
}