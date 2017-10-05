createRuntime(__filename).then(runtime => {
  const mockReference = {
    isMock: true
  };
  const root = runtime.requireModule(runtime.__mockRootPath, rootJsPath);
  root.jest.resetModuleRegistry();
  root.jest.mock("RegularModule", () => mockReference);
  root.jest.mock("ManuallyMocked", () => mockReference);
  root.jest.mock("nested1/nested2/nested3");
  expect(
    runtime.requireModuleOrMock(runtime.__mockRootPath, "RegularModule")
  ).toEqual(mockReference);
  expect(
    runtime.requireModuleOrMock(runtime.__mockRootPath, "ManuallyMocked")
  ).toEqual(mockReference);
  expect(
    runtime.requireModuleOrMock(
      runtime.__mockRootPath,
      "nested1/nested2/nested3"
    )
  ).toEqual(mockReference);
});
