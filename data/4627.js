{
  const fn = jest.fn();
  jestExpect(fn).not[calledWith]("foo", "bar");
  expect(() =>
    jestExpect(fn)[calledWith]("foo", "bar")
  ).toThrowErrorMatchingSnapshot();
}
