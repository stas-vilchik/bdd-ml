{
  it("uses explicitly set mocks instead of automocking", () =>
    createRuntime(__filename).then(runtime => {
      const mockReference = {
        isMock: true
      };
      const root = runtime.requireModule(runtime.__mockRootPath, rootJsPath);
      root.jest.resetModuleRegistry();
      root.jest.setMock("RegularModule", mockReference);
      root.jest.setMock("ManuallyMocked", mockReference);
      expect(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "RegularModule")
      ).toBe(mockReference);
      expect(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "ManuallyMocked")
      ).toBe(mockReference);
    }));
}
