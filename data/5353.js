{
  const nativeSetTimeout = jest.genMockFn();
  const global = {
    process,
    setTimeout: nativeSetTimeout
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  expect(() => {
    timers.runWithRealTimers(() => {
      global.setTimeout();
      throw new Error("test");
    });
  }).toThrow(new Error("test"));
  expect(nativeSetTimeout.mock.calls.length).toBe(1);
  expect(global.setTimeout.mock.calls.length).toBe(0);
  global.setTimeout();
  expect(nativeSetTimeout.mock.calls.length).toBe(1);
  expect(global.setTimeout.mock.calls.length).toBe(1);
}
