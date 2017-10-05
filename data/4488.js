{
  jestExpect(v).toBeFalsy();
  jestExpect(v).not.toBeTruthy();
  expect(() => jestExpect(v).toBeTruthy()).toThrowErrorMatchingSnapshot();
  expect(() => jestExpect(v).not.toBeFalsy()).toThrowErrorMatchingSnapshot();
}
