{
  let localFlag = true;
  afterEach(() => {
    this.flag = 1;
    localFlag = false;
    return new Promise(resolve => {
      process.nextTick(resolve);
    }).then(() => {
      this.flag = undefined;
    });
  });
  it("runs afterEach after each test", () => {
    expect(this.flag).toBe(undefined);
    expect(localFlag).toBe(true);
  });
  it("waits for afterEach to asynchronously complete before each test", () => {
    expect(this.flag).toBe(undefined);
    expect(localFlag).toBe(false);
  });
}
