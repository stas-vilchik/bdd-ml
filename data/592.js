{
  expect(isAbsoluteURL("123://example.com/")).toBe(false);
  expect(isAbsoluteURL("!valid://example.com/")).toBe(false);
}
