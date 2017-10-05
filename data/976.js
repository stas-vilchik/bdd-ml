{
  expect("[");

  if (!skip("]")) {
    do {
      readVal();
    } while (skip(","));

    expect("]");
  }
}
