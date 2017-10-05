{
  for (let i = 0; i < 3; ++i) {
    yield h(() => i);
  }
}