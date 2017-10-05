{
  expect(() =>
    jestExpect(fn).toHaveBeenCalledTimes(value)
  ).toThrowErrorMatchingSnapshot();
}
