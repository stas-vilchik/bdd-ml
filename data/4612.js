{
  it("accepts only numbers", () => {
    const fn = jest.fn();
    fn();
    jestExpect(fn).toHaveBeenCalledTimes(1);
    [{}, [], true, "a", new Map(), () => {}].forEach(value => {
      expect(() =>
        jestExpect(fn).toHaveBeenCalledTimes(value)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  it("verifies that actual is a Spy", () => {
    const fn = function fn() {};

    expect(() =>
      jestExpect(fn).toHaveBeenCalledTimes(2)
    ).toThrowErrorMatchingSnapshot();
  });
  it("passes if function called equal to expected times", () => {
    const fn = jest.fn();
    fn();
    fn();
    jestExpect(fn).toHaveBeenCalledTimes(2);
    expect(() =>
      jestExpect(fn).not.toHaveBeenCalledTimes(2)
    ).toThrowErrorMatchingSnapshot();
  });
  it("fails if function called more than expected times", () => {
    const fn = jest.fn();
    fn();
    fn();
    fn();
    jestExpect(fn).toHaveBeenCalledTimes(3);
    jestExpect(fn).not.toHaveBeenCalledTimes(2);
    expect(() =>
      jestExpect(fn).toHaveBeenCalledTimes(2)
    ).toThrowErrorMatchingSnapshot();
  });
  it("fails if function called less than expected times", () => {
    const fn = jest.fn();
    fn();
    jestExpect(fn).toHaveBeenCalledTimes(1);
    jestExpect(fn).not.toHaveBeenCalledTimes(2);
    expect(() =>
      jestExpect(fn).toHaveBeenCalledTimes(2)
    ).toThrowErrorMatchingSnapshot();
  });
}
