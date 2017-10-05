{
  const fn = jest.fn();
  fn();
  jestExpect(fn)[calledWith]();
}
