{
  const global = {
    process: {
      nextTick: () => {}
    }
  };
  const timers = new FakeTimers(global, moduleMocker);
  timers.useFakeTimers();
  const runOrder = [];
  const mock1 = jest.fn(() => runOrder.push("mock1"));
  const mock2 = jest.fn(() => runOrder.push("mock2"));
  global.process.nextTick(mock1);
  global.process.nextTick(mock2);
  expect(mock1.mock.calls.length).toBe(0);
  expect(mock2.mock.calls.length).toBe(0);
  timers.runAllTicks();
  expect(mock1.mock.calls.length).toBe(1);
  expect(mock2.mock.calls.length).toBe(1);
  expect(runOrder).toEqual(["mock1", "mock2"]);
}
