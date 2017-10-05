{
  const nativeClearInterval = jest.genMockFn();
  const nativeClearTimeout = jest.genMockFn();
  const nativeSetInterval = jest.genMockFn();
  const nativeSetTimeout = jest.genMockFn();
  const global = {
    clearInterval: nativeClearInterval,
    clearTimeout: nativeClearTimeout,
    process,
    setInterval: nativeSetInterval,
    setTimeout: nativeSetTimeout
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  timers.runWithRealTimers(() => {
    global.clearInterval();
  });
  expect(nativeClearInterval.mock.calls.length).toBe(1);
  expect(global.clearInterval.mock.calls.length).toBe(0);
  timers.runWithRealTimers(() => {
    global.clearTimeout();
  });
  expect(nativeClearTimeout.mock.calls.length).toBe(1);
  expect(global.clearTimeout.mock.calls.length).toBe(0);
  timers.runWithRealTimers(() => {
    global.setInterval();
  });
  expect(nativeSetInterval.mock.calls.length).toBe(1);
  expect(global.setInterval.mock.calls.length).toBe(0);
  timers.runWithRealTimers(() => {
    global.setTimeout();
  });
  expect(nativeSetTimeout.mock.calls.length).toBe(1);
  expect(global.setTimeout.mock.calls.length).toBe(0);
}
