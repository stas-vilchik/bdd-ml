{
  const nativeSetTimeout = jest.genMockFn();
  const global = {
    process,
    setTimeout: nativeSetTimeout
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const mock1 = jest.genMockFn();
  global.setTimeout(mock1, 0);
  timers.runAllTimers();
  expect(mock1.mock.calls.length).toBe(1);
  expect(nativeSetTimeout.mock.calls.length).toBe(0);
}
