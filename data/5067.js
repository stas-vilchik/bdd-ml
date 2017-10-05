{
  it("creates mock functions", () =>
    createRuntime(__filename).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath);
      const mock = root.jest.fn();
      expect(mock._isMockFunction).toBe(true);
      mock();
      expect(mock).toBeCalled();
    }));
  it("creates mock functions with mock implementations", () =>
    createRuntime(__filename).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath);
      const mock = root.jest.fn(string => string + " implementation");
      expect(mock._isMockFunction).toBe(true);
      const value = mock("mock");
      expect(value).toEqual("mock implementation");
      expect(mock).toBeCalled();
    }));
}
