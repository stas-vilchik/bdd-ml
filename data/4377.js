{
  jest.resetAllMocks();
  jest.useFakeTimers();
  const f = jest.fn();
  setImmediate(() => f());
  jest.runAllImmediates();
  expect(f.mock.calls.length).toBe(1);
}
