{
  const fn = moduleMocker.fn();
  fn.mockReturnValue("abcd");
  const before = fn();
  expect(before).toEqual("abcd");
  fn.mockReset();
  const after = fn();
  expect(after).not.toEqual("abcd");
}
