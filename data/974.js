{
  expect("{");

  if (!skip("}")) {
    do {
      expect("String");
      expect(":");
      readVal();
    } while (skip(","));

    expect("}");
  }
}
