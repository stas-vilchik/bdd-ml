{
  expect(() => jestExpect(v).toBeNaN()).toThrowErrorMatchingSnapshot();
  jestExpect(v).not.toBeNaN();
}
