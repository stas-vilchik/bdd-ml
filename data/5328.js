{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const fn = jest.genMockFn();
  global.setTimeout(fn, 0, "mockArg1", "mockArg2");
  timers.runAllTimers();
  expect(fn.mock.calls).toEqual([["mockArg1", "mockArg2"]]);
}
