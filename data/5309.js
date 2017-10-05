{
  const origSetImmediate = () => {};

  const global = {
    process,
    setImmediate: origSetImmediate
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  expect(global.setImmediate).not.toBe(origSetImmediate);
}
