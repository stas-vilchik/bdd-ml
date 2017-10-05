{
  try {
    yield 1;
    throw 'caught';
  } catch (e) {
    throw 'ex';
  } finally {
    f.x = 2;
  }
}