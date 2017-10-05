{
  beforeAll(() => {
    return new Promise(resolve => {
      process.nextTick(resolve);
    }).then(() => {
      this.flag = 1;
    });
  });
  beforeAll(() => {
    return new Promise(resolve => setTimeout(resolve, 10));
  }, 500);
  it("runs tests after beforeAll asynchronously completes", () => {
    expect(this.flag).toBe(1);
  });
  describe("with failing timeout", () => {
    beforeAll(() => {
      return new Promise(resolve => setTimeout(resolve, 100));
    }, 10);
    it("fails", () => {});
  });
  describe("done - with error thrown", () => {
    beforeAll(done => {
      throw new Error("fail");
      done();
    });
    it("fails", () => {});
  });
  describe("done - with error called back", () => {
    beforeAll(done => {
      done(new Error("fail"));
    });
    it("fails", () => {});
  });
}
