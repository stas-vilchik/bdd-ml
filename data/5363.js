{
  const nativeSetImmediate = jest.genMockFn();
  const nativeClearImmediate = jest.genMockFn();
  const global = {
    clearImmediate: nativeClearImmediate,
    process,
    setImmediate: nativeSetImmediate
  };
  const fakeTimers = new FakeTimers(global, moduleMocker);
  fakeTimers.useRealTimers();
  expect(global.setImmediate).toBe(nativeSetImmediate);
  expect(global.clearImmediate).toBe(nativeClearImmediate);
  fakeTimers.useFakeTimers();
  expect(global.setImmediate).not.toBe(nativeSetImmediate);
  expect(global.clearImmediate).not.toBe(nativeClearImmediate);
}
