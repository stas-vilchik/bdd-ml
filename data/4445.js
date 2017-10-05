{
  it("should reject", async () => {
    await jestExpect(Promise.reject(4)).rejects.toBe(4);
    await jestExpect(Promise.reject(4)).rejects.not.toBe(5);
    await jestExpect(Promise.reject(4.2)).rejects.toBeCloseTo(4.2, 5);
    await jestExpect(Promise.reject(3)).rejects.not.toBeCloseTo(4.2, 5);
    await jestExpect(
      Promise.reject({
        a: 1,
        b: 2
      })
    ).rejects.toMatchObject({
      a: 1
    });
    await jestExpect(
      Promise.reject({
        a: 1,
        b: 2
      })
    ).rejects.not.toMatchObject({
      c: 1
    });
    await jestExpect(
      Promise.reject(() => {
        throw new Error();
      })
    ).rejects.toThrow();
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
        await jestExpect(value).rejects.toBeDefined();
      } catch (e) {
        error = e;
      }

      expect(error).toBeDefined();
      expect(error.message).toMatchSnapshot();
    });
  });
  it("fails for promise that resolves", async () => {
    let error;

    try {
      await jestExpect(Promise.resolve(4)).rejects.toBe(4);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.message).toMatchSnapshot();
  });
}
