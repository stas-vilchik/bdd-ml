{
  const nativeNextTick = jest.genMockFn();
  const global = {
    process: {
      nextTick: nativeNextTick
    }
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const mock1 = jest.genMockFn();
  global.process.nextTick(mock1);
  nativeNextTick.mock.calls[0][0]();
  expect(mock1.mock.calls.length).toBe(1);
  timers.runAllTicks();
  expect(mock1.mock.calls.length).toBe(1);
}
