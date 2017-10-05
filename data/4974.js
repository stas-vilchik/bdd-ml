{
  const fn = moduleMocker.fn();
  fn.mockImplementation(() => "abcd");
  const before = fn();
  expect(before).toEqual("abcd");
  fn.mockReset();
  const after = fn();
  expect(after).not.toEqual("abcd");
}
