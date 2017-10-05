{
  const global = {
    process
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const runOrder = [];
  const mock1 = jest.fn(() => runOrder.push("mock1"));
  const mock2 = jest.fn(() => runOrder.push("mock2"));
  const mock3 = jest.fn(() => runOrder.push("mock3"));
  const mock4 = jest.fn(() => runOrder.push("mock4"));
  global.setTimeout(mock1, 100);
  global.setTimeout(mock2, 0);
  global.setTimeout(mock3, 0);
  const intervalHandler = global.setInterval(() => {
    mock4();
    global.clearInterval(intervalHandler);
  }, 200);
  timers.runAllTimers();
  expect(runOrder).toEqual(["mock2", "mock3", "mock1", "mock4"]);
}
