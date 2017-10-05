{
  const nativeSetImmediate = jest.genMockFn();
  const global = {
    process,
    setImmediate: nativeSetImmediate
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const runOrder = [];
  global.setTimeout(function cb() {
    runOrder.push("mock1");
    global.setTimeout(cb, 100);
  }, 100);
  global.setTimeout(function cb() {
    runOrder.push("mock2");
    global.setTimeout(cb, 0);
  }, 0);
  global.setInterval(() => {
    runOrder.push("mock3");
  }, 200);
  global.setImmediate(() => {
    runOrder.push("mock4");
  });
  timers.runOnlyPendingTimers();
  expect(runOrder).toEqual(["mock4", "mock2", "mock1", "mock3"]);
  timers.runOnlyPendingTimers();
  expect(runOrder).toEqual([
    "mock4",
    "mock2",
    "mock1",
    "mock3",
    "mock2",
    "mock1",
    "mock3"
  ]);
}
