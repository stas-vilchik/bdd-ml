{
  const nativeSetTimeout = jest.genMockFn();
  const global = {
    process,
    setTimeout: nativeSetTimeout
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  timers.runAllTimers();
}
