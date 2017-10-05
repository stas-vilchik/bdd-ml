{
  expect(() =>
    jestExpect(obj).toHaveProperty(keyPath, value)
  ).toThrowErrorMatchingSnapshot();
  jestExpect(obj).not.toHaveProperty(keyPath, value);
}
