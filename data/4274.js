{
  beforeEach(done => {
    throw new Error("fail");
    done();
  });
  it("fails", () => {});
}
