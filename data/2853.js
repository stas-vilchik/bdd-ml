{
  try {
    yield 1;
  } finally {
    throw 2;
  }

  yield 3;
}