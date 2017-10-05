{
  expect(() =>
    jestExpect(() => {})[toThrow](/apple/)
  ).toThrowErrorMatchingSnapshot();
}
