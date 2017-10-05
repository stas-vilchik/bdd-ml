{
  const origSetImmediate = () => {};

  const origClearImmediate = () => {};

  const global = {
    clearImmediate: origClearImmediate,
    process,
    setImmediate: origSetImmediate
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  expect(global.clearImmediate).not.toBe(origClearImmediate);
}
