{
  const fn = function fn() {};

  expect(() =>
    jestExpect(fn).toHaveBeenCalledTimes(2)
  ).toThrowErrorMatchingSnapshot();
}
