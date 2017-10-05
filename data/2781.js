{
  try {
    yield 1;
  } catch (e) {
    f.x = 2;
  } finally {
    f.y = 3;
  }
}