{
  const nativeSetTimeout = jest.genMockFn();
  const nativeSetInterval = jest.genMockFn();
  const nativeClearTimeout = jest.genMockFn();
  const nativeClearInterval = jest.genMockFn();
  const global = {
    clearInterval: nativeClearInterval,
    clearTimeout: nativeClearTimeout,
    process,
    setInterval: nativeSetInterval,
    setTimeout: nativeSetTimeout
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  expect(global.setTimeout).not.toBe(nativeSetTimeout);
  expect(global.setInterval).not.toBe(nativeSetInterval);
  expect(global.clearTimeout).not.toBe(nativeClearTimeout);
  expect(global.clearInterval).not.toBe(nativeClearInterval);
  timers.useRealTimers();
  expect(global.setTimeout).toBe(nativeSetTimeout);
  expect(global.setInterval).toBe(nativeSetInterval);
  expect(global.clearTimeout).toBe(nativeClearTimeout);
  expect(global.clearInterval).toBe(nativeClearInterval);
}
