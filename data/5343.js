{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const mock1 = jest.genMockFn();
  global.setTimeout(mock1, 100);
  timers.runTimersToTime(50);
  timers.reset();
  global.setTimeout(mock1, 100);
  timers.runTimersToTime(50);
  expect(mock1.mock.calls.length).toBe(0);
}
