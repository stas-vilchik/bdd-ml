{
  try {
    yield 1;
    throw 2;
    oob += 3;
  } finally {
    oob += 4;
  }

  oob += 5;
  yield 6;
}