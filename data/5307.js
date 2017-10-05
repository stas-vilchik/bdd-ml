{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  expect(global.clearInterval).not.toBe(undefined);
}
