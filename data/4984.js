{
  const mockFn = moduleMocker.fn();
  mockFn
    .mockImplementationOnce(() => {
      return "Foo";
    })
    .mockImplementationOnce(() => {
      return "Bar";
    });
  expect(mockFn()).toBe("Foo");
  expect(mockFn()).toBe("Bar");
  expect(mockFn()).toBeUndefined();
}
