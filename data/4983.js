{
  it("should mock single call to a mock function", () => {
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
  });
  it("should fallback to default mock function when no specific mock is available", () => {
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
  });
}
