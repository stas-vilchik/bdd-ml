{
  try {
    yield 1000;
    return 42;
    yield 2000;
  } catch (e) {
    return 43;
  } finally {}
}