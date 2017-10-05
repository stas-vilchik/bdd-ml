{
  test("first test", () => {
    importedFn();
    localFn();
    expect(importedFn.mock.calls.length).toBe(1);
    expect(localFn.mock.calls.length).toBe(1);
  });
  test("second test", () => {
    importedFn();
    localFn();
    expect(importedFn.mock.calls.length).toBe(2);
    expect(localFn.mock.calls.length).toBe(2);
  });
}
