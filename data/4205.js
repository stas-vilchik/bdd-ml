{
  importedFn();
  localFn();
  expect(importedFn.mock.calls.length).toBe(1);
  expect(localFn.mock.calls.length).toBe(1);
}
