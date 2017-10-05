{
  try {
    yield 42;
  } finally {
    finallyVisited = true;
  }
}