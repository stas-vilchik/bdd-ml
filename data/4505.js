{
  jestExpect(undefined).toBeUndefined();
  jestExpect(undefined).not.toBeDefined();
  expect(() =>
    jestExpect(undefined).toBeDefined()
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(undefined).not.toBeUndefined()
  ).toThrowErrorMatchingSnapshot();
}
