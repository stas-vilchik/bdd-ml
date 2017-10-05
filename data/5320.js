{
  const global = {
    process: {
      nextTick: () => {}
    }
  };
  const timers = new FakeTimers(global, moduleMocker, null, 100);
  timers.useFakeTimers();
  global.process.nextTick(function infinitelyRecursingCallback() {
    global.process.nextTick(infinitelyRecursingCallback);
  });
  expect(() => {
    timers.runAllTicks();
  }).toThrow(
    new Error(
      "Ran 100 ticks, and there are still more! Assuming we've hit an " +
        "infinite recursion and bailing out..."
    )
  );
}
