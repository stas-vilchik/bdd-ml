{
  const fn = jest.fn();
  fn("foo", "bar1");
  jestExpect(fn).not[calledWith]("foo", "bar");
  expect(() =>
    jestExpect(fn)[calledWith]("foo", "bar")
  ).toThrowErrorMatchingSnapshot();
}
