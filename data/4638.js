{
  const fn = jest.fn();
  const m1 = new Map([[1, 2], [2, 1]]);
  const m2 = new Map([[1, 2], [2, 1]]);
  const m3 = new Map([["a", "b"], ["b", "a"]]);
  fn(m1);
  jestExpect(fn)[calledWith](m2);
  jestExpect(fn).not[calledWith](m3);
  expect(() =>
    jestExpect(fn).not[calledWith](m2)
  ).toThrowErrorMatchingSnapshot();
  expect(() => jestExpect(fn)[calledWith](m3)).toThrowErrorMatchingSnapshot();
}
