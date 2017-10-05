{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const fn = jest.genMockFn();
  global.setTimeout(fn, 0);
  expect(fn.mock.calls.length).toBe(0);
  timers.runAllTimers();
  expect(fn.mock.calls.length).toBe(1);
  timers.runAllTimers();
  expect(fn.mock.calls.length).toBe(1);
}
