{
  const nextTick = jest.genMockFn();
  const global = {
    process: {
      nextTick
    }
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  timers.runAllTicks();
  expect(nextTick.mock.calls.length).toBe(0);
}
