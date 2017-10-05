{
  const fn = moduleMocker.fn();
  fn.mockImplementationOnce(() => "abcd");
  fn.mockReset();
  const after = fn();
  expect(after).not.toEqual("abcd");
}
