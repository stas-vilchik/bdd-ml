{
  expect(() =>
    jestExpect(obj).toHaveProperty(keyPath)
  ).toThrowErrorMatchingSnapshot();
  jestExpect(obj).not.toHaveProperty(keyPath);
}
