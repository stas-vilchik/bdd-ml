{
  it("tracks calls to mocks", () => {
    const fn = moduleMocker.fn();
    expect(fn.mock.calls).toEqual([]);
    fn(1, 2, 3);
    expect(fn.mock.calls).toEqual([[1, 2, 3]]);
    fn("a", "b", "c");
    expect(fn.mock.calls).toEqual([[1, 2, 3], ["a", "b", "c"]]);
  });
  it("tracks instances made by mocks", () => {
    const fn = moduleMocker.fn();
    expect(fn.mock.instances).toEqual([]);
    const instance1 = new fn();
    expect(fn.mock.instances[0]).toBe(instance1);
    const instance2 = new fn();
    expect(fn.mock.instances[1]).toBe(instance2);
  });
  it("supports clearing mock calls", () => {
    const fn = moduleMocker.fn();
    expect(fn.mock.calls).toEqual([]);
    fn(1, 2, 3);
    expect(fn.mock.calls).toEqual([[1, 2, 3]]);
    fn.mockReturnValue("abcd");
    fn.mockClear();
    expect(fn.mock.calls).toEqual([]);
    fn("a", "b", "c");
    expect(fn.mock.calls).toEqual([["a", "b", "c"]]);
    expect(fn()).toEqual("abcd");
  });
  it("supports clearing mocks", () => {
    const fn = moduleMocker.fn();
    expect(fn.mock.calls).toEqual([]);
    fn(1, 2, 3);
    expect(fn.mock.calls).toEqual([[1, 2, 3]]);
    fn.mockClear();
    expect(fn.mock.calls).toEqual([]);
    fn("a", "b", "c");
    expect(fn.mock.calls).toEqual([["a", "b", "c"]]);
  });
  it("supports clearing all mocks", () => {
    const fn1 = moduleMocker.fn();
    fn1.mockImplementation(() => "abcd");
    fn1(1, 2, 3);
    expect(fn1.mock.calls).toEqual([[1, 2, 3]]);
    const fn2 = moduleMocker.fn();
    fn2.mockReturnValue("abcde");
    fn2("a", "b", "c", "d");
    expect(fn2.mock.calls).toEqual([["a", "b", "c", "d"]]);
    moduleMocker.clearAllMocks();
    expect(fn1.mock.calls).toEqual([]);
    expect(fn2.mock.calls).toEqual([]);
    expect(fn1()).toEqual("abcd");
    expect(fn2()).toEqual("abcde");
  });
  it("supports resetting mock return values", () => {
    const fn = moduleMocker.fn();
    fn.mockReturnValue("abcd");
    const before = fn();
    expect(before).toEqual("abcd");
    fn.mockReset();
    const after = fn();
    expect(after).not.toEqual("abcd");
  });
  it("supports resetting single use mock return values", () => {
    const fn = moduleMocker.fn();
    fn.mockReturnValueOnce("abcd");
    fn.mockReset();
    const after = fn();
    expect(after).not.toEqual("abcd");
  });
  it("supports resetting mock implementations", () => {
    const fn = moduleMocker.fn();
    fn.mockImplementation(() => "abcd");
    const before = fn();
    expect(before).toEqual("abcd");
    fn.mockReset();
    const after = fn();
    expect(after).not.toEqual("abcd");
  });
  it("supports resetting single use mock implementations", () => {
    const fn = moduleMocker.fn();
    fn.mockImplementationOnce(() => "abcd");
    fn.mockReset();
    const after = fn();
    expect(after).not.toEqual("abcd");
  });
  it("supports resetting all mocks", () => {
    const fn1 = moduleMocker.fn();
    fn1.mockImplementation(() => "abcd");
    fn1(1, 2, 3);
    expect(fn1.mock.calls).toEqual([[1, 2, 3]]);
    const fn2 = moduleMocker.fn();
    fn2.mockReturnValue("abcd");
    fn2("a", "b", "c");
    expect(fn2.mock.calls).toEqual([["a", "b", "c"]]);
    moduleMocker.resetAllMocks();
    expect(fn1.mock.calls).toEqual([]);
    expect(fn2.mock.calls).toEqual([]);
    expect(fn1()).not.toEqual("abcd");
    expect(fn2()).not.toEqual("abcd");
  });
  it("maintains function arity", () => {
    const mockFunctionArity1 = moduleMocker.fn(x => x);
    const mockFunctionArity2 = moduleMocker.fn((x, y) => y);
    expect(mockFunctionArity1.length).toBe(1);
    expect(mockFunctionArity2.length).toBe(2);
  });
}
