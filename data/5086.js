{
  it("uses explicitly set mocks instead of automocking", () =>
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
    }));
  it("sets virtual mock for non-existing module required from same directory", () =>
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
        runtime.requireModuleOrMock(
          runtime.__mockRootPath,
          "NotInstalledModule"
        )
      ).toEqual(mockReference);
      expect(
        runtime.requireModuleOrMock(runtime.__mockRootPath, "../ManuallyMocked")
      ).toEqual(mockReference);
      expect(
        runtime.requireModuleOrMock(
          runtime.__mockRootPath,
          "/AbsolutePath/Mock"
        )
      ).toEqual(mockReference);
    }));
  it("sets virtual mock for non-existing module required from different directory", () =>
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
        runtime.requireModuleOrMock(
          runtime.__mockSubdirPath,
          "NotInstalledModule"
        )
      ).toEqual(mockReference);
      expect(
        runtime.requireModuleOrMock(
          runtime.__mockSubdirPath,
          "../../../ManuallyMocked"
        )
      ).toEqual(mockReference);
      expect(
        runtime.requireModuleOrMock(
          runtime.__mockSubdirPath,
          "/AbsolutePath/Mock"
        )
      ).toEqual(mockReference);
    }));
}
