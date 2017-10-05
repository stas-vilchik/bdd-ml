{
  beforeEach(() => {
    return new Promise(resolve => {
      process.nextTick(resolve);
    }).then(() => {
      this.flag = 1;
    });
  });
  it("runs tests after beforeEach asynchronously completes", () => {
    expect(this.flag).toBe(1);
  });
  describe("done - with error thrown", () => {
    beforeEach(done => {
      throw new Error("fail");
      done();
    });
    it("fails", () => {});
  });
  describe("done - with error called back", () => {
    beforeEach(done => {
      done(new Error("fail"));
    });
    it("fails", () => {});
  });
}
