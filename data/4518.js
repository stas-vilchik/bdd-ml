{
  expect(() =>
    jestExpect(small).toBeGreaterThan(big)
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(small).not.toBeLessThan(big)
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(big).not.toBeGreaterThan(small)
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(big).toBeLessThan(small)
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(small).toBeGreaterThanOrEqual(big)
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(small).not.toBeLessThanOrEqual(big)
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(big).not.toBeGreaterThanOrEqual(small)
  ).toThrowErrorMatchingSnapshot();
  expect(() =>
    jestExpect(big).toBeLessThanOrEqual(small)
  ).toThrowErrorMatchingSnapshot();
}
