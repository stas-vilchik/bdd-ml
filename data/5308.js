{
  const origNextTick = () => {};

  const global = {
    process: {
      nextTick: origNextTick
    }
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  expect(global.process.nextTick).not.toBe(origNextTick);
}
