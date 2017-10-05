{
  it("installs setTimeout mock", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    expect(global.setTimeout).not.toBe(undefined);
  });
  it("installs clearTimeout mock", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    expect(global.clearTimeout).not.toBe(undefined);
  });
  it("installs setInterval mock", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    expect(global.setInterval).not.toBe(undefined);
  });
  it("installs clearInterval mock", () => {
    const global = {
      process
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    expect(global.clearInterval).not.toBe(undefined);
  });
  it("mocks process.nextTick if it exists on global", () => {
    const origNextTick = () => {};

    const global = {
      process: {
        nextTick: origNextTick
      }
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    expect(global.process.nextTick).not.toBe(origNextTick);
  });
  it("mocks setImmediate if it exists on global", () => {
    const origSetImmediate = () => {};

    const global = {
      process,
      setImmediate: origSetImmediate
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    expect(global.setImmediate).not.toBe(origSetImmediate);
  });
  it("mocks clearImmediate if setImmediate is on global", () => {
    const origSetImmediate = () => {};

    const origClearImmediate = () => {};

    const global = {
      clearImmediate: origClearImmediate,
      process,
      setImmediate: origSetImmediate
    };
    const timers = new FakeTimers(global, moduleMocker);
    timers.useFakeTimers();
    expect(global.clearImmediate).not.toBe(origClearImmediate);
  });
}
