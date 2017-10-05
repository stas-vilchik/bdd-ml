{
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
}
