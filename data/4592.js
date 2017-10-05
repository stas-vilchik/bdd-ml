{
  jestExpect(obj).toHaveProperty(keyPath);
  expect(() =>
    jestExpect(obj).not.toHaveProperty(keyPath)
  ).toThrowErrorMatchingSnapshot();
}
