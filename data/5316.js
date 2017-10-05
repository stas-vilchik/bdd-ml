{
  const nativeSetImmediate = jest.genMockFn();
  const global = {
    process,
    setImmediate: nativeSetImmediate
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const mock1 = jest.genMockFn();
  global.setImmediate(mock1);
  timers.runAllImmediates();
  expect(mock1.mock.calls.length).toBe(1);
  expect(nativeSetImmediate.mock.calls.length).toBe(1);
  nativeSetImmediate.mock.calls[0][0]();
  expect(mock1.mock.calls.length).toBe(1);
}
