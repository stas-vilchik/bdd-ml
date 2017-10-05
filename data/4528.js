{
  jestExpect(n1).toBeGreaterThanOrEqual(n2);
  jestExpect(n1).toBeLessThanOrEqual(n2);
  expect(() =>
    jestExpect(n1).not.toBeGreaterThanOrEqual(n2)
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(n1).not.toBeLessThanOrEqual(n2)
  ).toThrowErrorMatchingSnapshot();
}
