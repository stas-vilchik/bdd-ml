{
  try {
    yield 1;
  } finally {
    f2.closed = true;
  }
}