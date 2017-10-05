{
  jestExpect(obj).toHaveProperty(keyPath, value);
  expect(() =>
    jestExpect(obj).not.toHaveProperty(keyPath, value)
  ).toThrowErrorMatchingSnapshot();
}
