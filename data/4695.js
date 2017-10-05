{
  expect(() =>
    jestExpect("a string")[toThrow]()
  ).toThrowErrorMatchingSnapshot();
}
