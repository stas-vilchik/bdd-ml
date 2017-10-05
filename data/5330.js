{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker, null, 100);
  timers.useFakeTimers();
  global.setTimeout(function infinitelyRecursingCallback() {
    global.setTimeout(infinitelyRecursingCallback, 0);
  }, 0);
  expect(() => {
    timers.runAllTimers();
  }).toThrow(
    new Error(
      "Ran 100 timers, and there are still more! Assuming we've hit an " +
        "infinite recursion and bailing out..."
    )
  );
}
