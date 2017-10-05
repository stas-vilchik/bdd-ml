{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const mock1 = jest.genMockFn();
  global.setInterval(mock1, 200);
  timers.reset();
  timers.runAllTimers();
  expect(mock1.mock.calls.length).toBe(0);
}
