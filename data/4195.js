{
  importedFn();
  expect(localFn()).toEqual("abcd");
  expect(importedFn.mock.calls.length).toBe(2);
  expect(localFn.mock.calls.length).toBe(2);
}
