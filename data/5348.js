{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const fn = jest.genMockFn();
  const timer = global.setTimeout(fn, 10);
  global.setTimeout(() => {
    global.clearTimeout(timer);
  }, 0);
  timers.runOnlyPendingTimers();
  expect(fn).not.toBeCalled();
}
