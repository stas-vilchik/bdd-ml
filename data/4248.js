{
  let localFlag = true;
  afterAll(() => {
    this.flag = 1;
    localFlag = false;
    return new Promise(resolve => {
      process.nextTick(resolve);
    }).then(() => {
      console.log("unset flag");
      this.flag = undefined;
    });
  });
  it("runs afterAll after all tests", () => {
    expect(this.flag).toBe(undefined);
    expect(localFlag).toBe(true);
  });
  it("waits for afterAll to asynchronously complete before each test", () => {
    expect(this.flag).toBe(undefined);
    expect(localFlag).toBe(true);
  });
}
