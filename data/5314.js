{
  const global = {
    process: {
      nextTick: () => {}
    }
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const mock1 = jest.genMockFn();
  global.process.nextTick(mock1);
  expect(mock1.mock.calls.length).toBe(0);
  timers.runAllTicks();
  expect(mock1.mock.calls.length).toBe(1);
  timers.runAllTicks();
  expect(mock1.mock.calls.length).toBe(1);
}
