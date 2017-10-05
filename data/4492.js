{
  jestExpect(v).toBeNaN();
  expect(() => jestExpect(v).not.toBeNaN()).toThrowErrorMatchingSnapshot();
}
