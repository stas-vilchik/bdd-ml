{
  it("runs all timers in order", () => {
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
  });
  it("warns when trying to advance timers while real timers are used", () => {
    const consoleWarn = console.warn;
    console.warn = jest.fn();
    const timers = new FakeTimers(global, moduleMocker, {
      rootDir: __dirname
    });
    timers.runAllTimers();
    expect(
      console.warn.mock.calls[0][0].split("\nStack Trace")[0]
    ).toMatchSnapshot();
    console.warn = consoleWarn;
  });
  it("does nothing when no timers have been scheduled", () => {
    const nativeSetTimeout = jest.genMockFn();
    const global = {
      process,
      setTimeout: nativeSetTimeout
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    timers.runAllTimers();
  });
  it("only runs a setTimeout callback once (ever)", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const fn = jest.genMockFn();
    global.setTimeout(fn, 0);
    expect(fn.mock.calls.length).toBe(0);
    timers.runAllTimers();
    expect(fn.mock.calls.length).toBe(1);
    timers.runAllTimers();
    expect(fn.mock.calls.length).toBe(1);
  });
  it("runs callbacks with arguments after the interval", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const fn = jest.genMockFn();
    global.setTimeout(fn, 0, "mockArg1", "mockArg2");
    timers.runAllTimers();
    expect(fn.mock.calls).toEqual([["mockArg1", "mockArg2"]]);
  });
  it("doesnt pass the callback to native setTimeout", () => {
    const nativeSetTimeout = jest.genMockFn();
    const global = {
      process,
      setTimeout: nativeSetTimeout
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.setTimeout(mock1, 0);
    timers.runAllTimers();
    expect(mock1.mock.calls.length).toBe(1);
    expect(nativeSetTimeout.mock.calls.length).toBe(0);
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
      timers.runAllTimers();
    }).toThrow(
      new Error(
        "Ran 100 timers, and there are still more! Assuming we've hit an " +
          "infinite recursion and bailing out..."
      )
    );
  });
  it("also clears ticks", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const fn = jest.genMockFn();
    global.setTimeout(() => {
      process.nextTick(fn);
    }, 0);
    expect(fn.mock.calls.length).toBe(0);
    timers.runAllTimers();
    expect(fn.mock.calls.length).toBe(1);
  });
}
