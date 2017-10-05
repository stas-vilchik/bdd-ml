{
  const fn = function fn() {};

  expect(() => jestExpect(fn)[calledWith]()).toThrowErrorMatchingSnapshot();
}
