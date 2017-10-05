{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const mock1 = jest.genMockFn();
  global.setTimeout(mock1, 100);
  timers.reset();
  timers.runAllTimers();
  expect(mock1.mock.calls.length).toBe(0);
}
