{
  const mockFn = moduleMocker.fn();
  mockFn
    .mockImplementationOnce(() => {
      return "Foo";
    })
    .mockImplementationOnce(() => {
      return "Bar";
    })
    .mockImplementation(() => {
      return "Default";
    });
  expect(mockFn()).toBe("Foo");
  expect(mockFn()).toBe("Bar");
  expect(mockFn()).toBe("Default");
  expect(mockFn()).toBe("Default");
}
