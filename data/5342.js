{
  const global = {
    process: {
      nextTick: () => {}
    },
    setImmediate: () => {}
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const mock1 = jest.genMockFn();
  global.process.nextTick(mock1);
  global.setImmediate(mock1);
  timers.reset();
  timers.runAllTicks();
  timers.runAllImmediates();
  expect(mock1.mock.calls.length).toBe(0);
}
