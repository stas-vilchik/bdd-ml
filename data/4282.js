{
  beforeEach(() => {
    this.someContextValue = "value";
  });
  it("passes a sync test", () => {
    expect(1).toBe(1);
  });
  it("waits for promise to be resolved", () => {
    return Promise.resolve();
  });
  it("works with done", done => {
    done();
  });
  it("works with async done", done => {
    setTimeout(done, 1);
  });
  it("is bound to context object", () => {
    return new Promise(resolve => {
      if (this.someContextValue !== "value") {
        throw new Error(
          "expected this.someContextValue to be set: " + this.someContextValue
        );
      }

      resolve();
    });
  });
  it("fails if promise is rejected", () => {
    return Promise.reject(new Error("rejected promise returned"));
  });
  it("works with done.fail", done => {
    done.fail(new Error("done.fail was called"));
  });
  it("works with done(error)", done => {
    done(new Error("done was called with error"));
  });
  it("fails if failed expectation with done", done => {
    expect(true).toEqual(false);
    done();
  });
  it("fails if failed expectation with done - async", done => {
    setTimeout(() => {
      expect(true).toEqual(false);
      done();
    }, 1);
  });
  it("fails with thrown error with done - sync", done => {
    throw new Error("sync fail");
    done();
  });
  it("fails with thrown error with done - async", done => {
    setTimeout(() => {
      throw new Error("async fail");
      done();
    }, 1);
  });
  it.skip("fails with thrown error - async", () => {
    setTimeout(() => {
      throw new Error("async fail - no done");
    }, 1);
  });
  it("fails a sync test", () => {
    expect("sync").toBe("failed");
  });
  it(
    "succeeds if the test finishes in time",
    () => {
      return new Promise(resolve => setTimeout(resolve, 10));
    },
    250
  );
  it(
    "fails if a custom timeout is exceeded",
    () => {
      return new Promise(resolve => setTimeout(resolve, 100));
    },
    10
  );
}
