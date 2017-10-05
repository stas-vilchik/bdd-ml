{
  const fn = moduleMocker.fn();
  fn.mockReturnValueOnce("abcd");
  fn.mockReset();
  const after = fn();
  expect(after).not.toEqual("abcd");
}
