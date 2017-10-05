createRuntime(__filename).then(runtime => {
  const mockReference = {
    isVirtualMock: true
  };
  const virtual = true;
  const root = runtime.requireModule(runtime.__mockRootPath, rootJsPath);
  root.jest.resetModuleRegistry();
  root.jest.mock("NotInstalledModule", () => mockReference, {
    virtual
  });
  root.jest.mock("../ManuallyMocked", () => mockReference, {
    virtual
  });
  root.jest.mock("/AbsolutePath/Mock", () => mockReference, {
    virtual
  });
  expect(
    runtime.requireModuleOrMock(runtime.__mockRootPath, "NotInstalledModule")
  ).toEqual(mockReference);
  expect(
    runtime.requireModuleOrMock(runtime.__mockRootPath, "../ManuallyMocked")
  ).toEqual(mockReference);
  expect(
    runtime.requireModuleOrMock(runtime.__mockRootPath, "/AbsolutePath/Mock")
  ).toEqual(mockReference);
});
