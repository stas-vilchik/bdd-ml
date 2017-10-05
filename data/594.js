{
  expect(isAbsoluteURL("/foo")).toBe(false);
  expect(isAbsoluteURL("foo")).toBe(false);
}
