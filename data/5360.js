{
  it("resets mock timer APIs", () => {
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
    timers.useRealTimers();
    expect(global.setTimeout).toBe(nativeSetTimeout);
    expect(global.setInterval).toBe(nativeSetInterval);
    expect(global.clearTimeout).toBe(nativeClearTimeout);
    expect(global.clearInterval).toBe(nativeClearInterval);
    timers.useFakeTimers();
    expect(global.setTimeout).not.toBe(nativeSetTimeout);
    expect(global.setInterval).not.toBe(nativeSetInterval);
    expect(global.clearTimeout).not.toBe(nativeClearTimeout);
    expect(global.clearInterval).not.toBe(nativeClearInterval);
  });
  it("resets mock process.nextTick when present", () => {
    const nativeProcessNextTick = jest.genMockFn();
    const global = {
      process: {
        nextTick: nativeProcessNextTick
      }
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useRealTimers();
    expect(global.process.nextTick).toBe(nativeProcessNextTick);
    timers.useFakeTimers();
    expect(global.process.nextTick).not.toBe(nativeProcessNextTick);
  });
  it("resets mock setImmediate when present", () => {
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
  });
}
