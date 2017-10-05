{
  expect(() =>
    jestExpect(() => {})[toThrow](111)
  ).toThrowErrorMatchingSnapshot();
}
