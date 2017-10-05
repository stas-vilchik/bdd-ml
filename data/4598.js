{
  expect(() =>
    jestExpect(obj).toHaveProperty(keyPath)
  ).toThrowErrorMatchingSnapshot();
}
