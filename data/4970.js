{
  const fn = moduleMocker.fn();
  expect(fn.mock.calls).toEqual([]);
  fn(1, 2, 3);
  expect(fn.mock.calls).toEqual([[1, 2, 3]]);
  fn.mockClear();
  expect(fn.mock.calls).toEqual([]);
  fn("a", "b", "c");
  expect(fn.mock.calls).toEqual([["a", "b", "c"]]);
}
