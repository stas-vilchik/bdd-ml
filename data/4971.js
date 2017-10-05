{
  const fn1 = moduleMocker.fn();
  fn1.mockImplementation(() => "abcd");
  fn1(1, 2, 3);
  expect(fn1.mock.calls).toEqual([[1, 2, 3]]);
  const fn2 = moduleMocker.fn();
  fn2.mockReturnValue("abcde");
  fn2("a", "b", "c", "d");
  expect(fn2.mock.calls).toEqual([["a", "b", "c", "d"]]);
  moduleMocker.clearAllMocks();
  expect(fn1.mock.calls).toEqual([]);
  expect(fn2.mock.calls).toEqual([]);
  expect(fn1()).toEqual("abcd");
  expect(fn2()).toEqual("abcde");
}
