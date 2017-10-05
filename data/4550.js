{
  expect(() =>
    jestExpect(null).toContainEqual(1)
  ).toThrowErrorMatchingSnapshot();
}
