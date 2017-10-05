{
  const fn = jest.fn();
  expect(fn()).toBeUndefined();
  fn.mockReturnValue("returnValue");
  fn.mockImplementation(() => "foo");
  expect(fn()).toBe("foo");
}
