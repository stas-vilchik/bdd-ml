{
  const nativeSetImmediate = jest.genMockFn();
  const nativeClearImmediate = jest.genMockFn();
  const global = {
    clearImmediate: nativeClearImmediate,
    process,
    setImmediate: nativeSetImmediate
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  expect(global.setImmediate).not.toBe(nativeSetImmediate);
  expect(global.clearImmediate).not.toBe(nativeClearImmediate);
  timers.useRealTimers();
  expect(global.setImmediate).toBe(nativeSetImmediate);
  expect(global.clearImmediate).toBe(nativeClearImmediate);
}
