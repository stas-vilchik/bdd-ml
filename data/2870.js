{
  x = 0;

  try {
    x++;
  } finally {
    yield x++;
  }

  yield x++;
}