{
  it("uses jsdom when specified", () => {
    const result = runJest("env-test", ["--env=jsdom"]);
    expect(result.status).toBe(0);
    expect(getLog(result)).toBe("WINDOW");
  });
  it("uses node as default from package.json", () => {
    const result = runJest("env-test");
    expect(result.status).toBe(0);
    expect(getLog(result)).toBe("NO WINDOW");
  });
  it("uses node when specified", () => {
    const result = runJest("env-test", ["--env=node"]);
    expect(result.status).toBe(0);
    expect(getLog(result)).toBe("NO WINDOW");
  });
  it("fails when the env is not available", () => {
    const result = runJest("env-test", ["--env=banana"]);
    expect(result.status).toBe(1);
  });
}
