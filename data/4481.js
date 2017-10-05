{
  expect(() => jestExpect(0).toBeTruthy(null)).toThrowErrorMatchingSnapshot();
  expect(() => jestExpect(0).toBeFalsy(null)).toThrowErrorMatchingSnapshot();
}
