{
  const mockFn = moduleMocker.fn();
  mockFn.mockImplementation(() => {
    return "Foo";
  });
  expect(typeof mockFn.getMockImplementation()).toBe("function");
  expect(mockFn.getMockImplementation()()).toBe("Foo");
}
