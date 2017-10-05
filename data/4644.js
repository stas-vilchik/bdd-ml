{
  const fn = jest.fn();
  const directlyCreated = new Immutable.Map([
    [
      "a",
      {
        b: "c"
      }
    ]
  ]);
  const indirectlyCreated = new Immutable.Map().set("a", {
    b: "c"
  });
  fn(directlyCreated, indirectlyCreated);
  jestExpect(fn)[calledWith](indirectlyCreated, directlyCreated);
  expect(() =>
    jestExpect(fn).not[calledWith](indirectlyCreated, directlyCreated)
  ).toThrowErrorMatchingSnapshot();
}
