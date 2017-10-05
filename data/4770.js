{
  it("uses a copy of the process object", () => {
    const env1 = new NodeEnvironment({});
    const env2 = new NodeEnvironment({});
    expect(env1.global.process).not.toBe(env2.global.process);
  });
  it("exposes process.on", () => {
    const env1 = new NodeEnvironment({});
    expect(env1.global.process.on).not.toBe(null);
  });
  it("exposes global.global", () => {
    const env1 = new NodeEnvironment({});
    expect(env1.global.global).toBe(env1.global);
  });
}
