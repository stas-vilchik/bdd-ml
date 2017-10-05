{
  const fn = jest.fn();
  fn();
  jestExpect(fn).toHaveBeenCalledTimes(1);
  jestExpect(fn).not.toHaveBeenCalledTimes(2);
  expect(() =>
    jestExpect(fn).toHaveBeenCalledTimes(2)
  ).toThrowErrorMatchingSnapshot();
}
