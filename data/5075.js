{
  it("clears all mocks", () => {
    createRuntime(__filename).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath);
      const mock1 = root.jest.fn();
      mock1();
      const mock2 = root.jest.fn();
      mock2();
      expect(mock1).toBeCalled();
      expect(mock2).toBeCalled();
      jest.clearAllMocks();
      expect(mock1).not.toBeCalled();
      expect(mock2).not.toBeCalled();
    });
  });
}
