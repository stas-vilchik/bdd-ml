{
  try {
    yield 1;
  } finally {
    return 2;
  }

  yield 3;
  return 4;
}