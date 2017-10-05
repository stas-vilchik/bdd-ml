{
  it("should resolve", async () => {
    await jestExpect(Promise.resolve(4)).resolves.toBe(4);
    await jestExpect(Promise.resolve(4)).resolves.not.toBe(5);
    await jestExpect(Promise.resolve(4.2)).resolves.toBeCloseTo(4.2, 5);
    await jestExpect(Promise.resolve(3)).resolves.not.toBeCloseTo(4.2, 5);
    await jestExpect(
      Promise.resolve({
        a: 1,
        b: 2
      })
    ).resolves.toMatchObject({
      a: 1
    });
    await jestExpect(
      Promise.resolve({
        a: 1,
        b: 2
      })
    ).resolves.not.toMatchObject({
      c: 1
    });
    await jestExpect(
      Promise.resolve(() => {
        throw new Error();
      })
    ).resolves.toThrow();
  });
  [
    4,
    [1],
    {
      a: 1
    },
    "a",
    true,
    null,
    undefined,
    () => {}
  ].forEach(value => {
    it(`fails non-promise value ${stringify(value)}`, async () => {
      let error;

      try {
        await jestExpect(value).resolves.toBeDefined();
      } catch (e) {
        error = e;
      }

      expect(error).toBeDefined();
      expect(error.message).toMatchSnapshot();
    });
  });
  it("fails for promise that rejects", async () => {
    let error;

    try {
      await jestExpect(Promise.reject(4)).resolves.toBe(4);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.message).toMatchSnapshot();
  });
}
