{
  it("runs all ticks, in order", () => {
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
  });
  it("does nothing when no ticks have been scheduled", () => {
    const nextTick = jest.genMockFn();
    const global = {
      process: {
        nextTick
      }
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    timers.runAllTicks();
    expect(nextTick.mock.calls.length).toBe(0);
  });
  it("only runs a scheduled callback once", () => {
    const global = {
      process: {
        nextTick: () => {}
      }
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.process.nextTick(mock1);
    expect(mock1.mock.calls.length).toBe(0);
    timers.runAllTicks();
    expect(mock1.mock.calls.length).toBe(1);
    timers.runAllTicks();
    expect(mock1.mock.calls.length).toBe(1);
  });
  it("cancels a callback even from native nextTick", () => {
    const nativeNextTick = jest.genMockFn();
    const global = {
      process: {
        nextTick: nativeNextTick
      }
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.process.nextTick(mock1);
    timers.runAllTicks();
    expect(mock1.mock.calls.length).toBe(1);
    expect(nativeNextTick.mock.calls.length).toBe(1);
    nativeNextTick.mock.calls[0][0]();
    expect(mock1.mock.calls.length).toBe(1);
  });
  it("cancels a callback even from native setImmediate", () => {
    const nativeSetImmediate = jest.genMockFn();
    const global = {
      process,
      setImmediate: nativeSetImmediate
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.setImmediate(mock1);
    timers.runAllImmediates();
    expect(mock1.mock.calls.length).toBe(1);
    expect(nativeSetImmediate.mock.calls.length).toBe(1);
    nativeSetImmediate.mock.calls[0][0]();
    expect(mock1.mock.calls.length).toBe(1);
  });
  it("doesnt run a tick callback if native nextTick already did", () => {
    const nativeNextTick = jest.genMockFn();
    const global = {
      process: {
        nextTick: nativeNextTick
      }
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.process.nextTick(mock1);
    nativeNextTick.mock.calls[0][0]();
    expect(mock1.mock.calls.length).toBe(1);
    timers.runAllTicks();
    expect(mock1.mock.calls.length).toBe(1);
  });
  it("doesnt run immediate if native setImmediate already did", () => {
    const nativeSetImmediate = jest.genMockFn();
    const global = {
      process,
      setImmediate: nativeSetImmediate
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.setImmediate(mock1);
    nativeSetImmediate.mock.calls[0][0]();
    expect(mock1.mock.calls.length).toBe(1);
    timers.runAllImmediates();
    expect(mock1.mock.calls.length).toBe(1);
  });
  it("native doesnt run immediate if fake already did", () => {
    const nativeSetImmediate = jest.genMockFn();
    const global = {
      process,
      setImmediate: nativeSetImmediate
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    const mock1 = jest.genMockFn();
    global.setImmediate(mock1);
    timers.runAllImmediates();
    expect(mock1.mock.calls.length).toBe(1);
    nativeSetImmediate.mock.calls[0][0]();
    expect(mock1.mock.calls.length).toBe(1);
  });
  it("throws before allowing infinite recursion", () => {
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
  });
}
