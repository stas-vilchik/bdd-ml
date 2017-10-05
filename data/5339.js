{
  it("resets all pending setTimeouts", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.setTimeout(mock1, 100);
    timers.reset();
    timers.runAllTimers();
    expect(mock1.mock.calls.length).toBe(0);
  });
  it("resets all pending setIntervals", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.setInterval(mock1, 200);
    timers.reset();
    timers.runAllTimers();
    expect(mock1.mock.calls.length).toBe(0);
  });
  it("resets all pending ticks callbacks & immediates", () => {
    const global = {
      process: {
        nextTick: () => {}
      },
      setImmediate: () => {}
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.process.nextTick(mock1);
    global.setImmediate(mock1);
    timers.reset();
    timers.runAllTicks();
    timers.runAllImmediates();
    expect(mock1.mock.calls.length).toBe(0);
  });
  it("resets current runTimersToTime time cursor", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.setTimeout(mock1, 100);
    timers.runTimersToTime(50);
    timers.reset();
    global.setTimeout(mock1, 100);
    timers.runTimersToTime(50);
    expect(mock1.mock.calls.length).toBe(0);
  });
}
