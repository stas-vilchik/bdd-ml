{
  it("runs timers in order", () => {
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
    global.setInterval(() => {
      mock4();
    }, 200);
    timers.runTimersToTime(50);
    expect(runOrder).toEqual(["mock2", "mock3"]);
    timers.runTimersToTime(10);
    expect(runOrder).toEqual(["mock2", "mock3"]);
    timers.runTimersToTime(40);
    expect(runOrder).toEqual(["mock2", "mock3", "mock1"]);
    timers.runTimersToTime(100);
    expect(runOrder).toEqual(["mock2", "mock3", "mock1", "mock4"]);
    timers.runTimersToTime(200);
    expect(runOrder).toEqual(["mock2", "mock3", "mock1", "mock4", "mock4"]);
  });
  it("does nothing when no timers have been scheduled", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    timers.runTimersToTime(100);
  });
  it("throws before allowing infinite recursion", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker, null, 100);
    timers.useFakeTimers();
    global.setTimeout(function infinitelyRecursingCallback() {
      global.setTimeout(infinitelyRecursingCallback, 0);
    }, 0);
    expect(() => {
      timers.runTimersToTime(50);
    }).toThrow(
      new Error(
        "Ran 100 timers, and there are still more! Assuming we've hit an " +
          "infinite recursion and bailing out..."
      )
    );
  });
}
