{
  beforeEach(() => {
    createRuntime = require("createRuntime");
  });
  it("finds @providesModule modules", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "RegularModule"
      );
      expect(exports.isRealModule).toBe(true);
    }));
  it("provides `module.parent` to modules", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "RegularModule"
      );
      expect(exports.parent).toEqual({
        exports: {},
        filename: "mock.js",
        id: "mockParent"
      });
    }));
  it("provides `module.filename` to modules", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "RegularModule"
      );
      expect(
        exports.filename.endsWith("test_root" + path.sep + "RegularModule.js")
      ).toBe(true);
    }));
  it("provides `module.paths` to modules", () => {
    const altModuleDir = "bower_components";
    const moduleDirectories = ["node_modules", altModuleDir];
    return createRuntime(__filename, {
      moduleDirectories
    }).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "RegularModule"
      );
      expect(exports.paths.length).toBeGreaterThan(0);
      exports.paths.forEach(path => {
        expect(moduleDirectories.some(dir => path.endsWith(dir))).toBe(true);
      });
    });
  });
  it("throws on non-existent @providesModule modules", () =>
    createRuntime(__filename).then(runtime => {
      expect(() => {
        runtime.requireModule(runtime.__mockRootPath, "DoesntExist");
      }).toThrow(new Error("Cannot find module 'DoesntExist' from 'root.js'"));
    }));
  it("finds relative-path modules without file extension", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "./RegularModule"
      );
      expect(exports.isRealModule).toBe(true);
    }));
  it("finds relative-path modules with file extension", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "./RegularModule.js"
      );
      expect(exports.isRealModule).toBe(true);
    }));
  it("throws on non-existent relative-path modules", () =>
    createRuntime(__filename).then(runtime => {
      expect(() => {
        runtime.requireModule(runtime.__mockRootPath, "./DoesntExist");
      }).toThrow(
        new Error("Cannot find module './DoesntExist' from 'root.js'")
      );
    }));
  it("finds node core built-in modules", () =>
    createRuntime(__filename).then(runtime => {
      expect(() => {
        runtime.requireModule(runtime.__mockRootPath, "fs");
      }).not.toThrow();
    }));
  it("finds and loads JSON files without file extension", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "./JSONFile"
      );
      expect(exports.isJSONModule).toBe(true);
    }));
  it("finds and loads JSON files with file extension", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "./JSONFile.json"
      );
      expect(exports.isJSONModule).toBe(true);
    }));
  it("requires a JSON file twice successfully", () =>
    createRuntime(__filename).then(runtime => {
      const exports1 = runtime.requireModule(
        runtime.__mockRootPath,
        "./JSONFile.json"
      );
      const exports2 = runtime.requireModule(
        runtime.__mockRootPath,
        "./JSONFile.json"
      );
      expect(exports1.isJSONModule).toBe(true);
      expect(exports2.isJSONModule).toBe(true);
      expect(exports1).toBe(exports2);
    }));
  it("provides manual mock when real module doesnt exist", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "ExclusivelyManualMock"
      );
      expect(exports.isExclusivelyManualMockModule).toBe(true);
    }));
  it(`doesn't override real modules with manual mocks when explicitly unmocked`, () =>
    createRuntime(__filename, {
      automock: true
    }).then(runtime => {
      const root = runtime.requireModule(runtime.__mockRootPath, "./root.js");
      root.jest.resetModuleRegistry();
      root.jest.unmock("ManuallyMocked");
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "ManuallyMocked"
      );
      expect(exports.isManualMockModule).toBe(false);
    }));
  it("resolves haste packages properly", () =>
    createRuntime(__filename).then(runtime => {
      const hastePackage = runtime.requireModule(
        runtime.__mockRootPath,
        "haste-package/core/module"
      );
      expect(hastePackage.isHastePackage).toBe(true);
    }));
  it("resolves node modules properly when crawling node_modules", () =>
    createRuntime(__filename, {
      haste: {
        providesModuleNodeModules: ["not-a-haste-package"]
      }
    }).then(runtime => {
      const hastePackage = runtime.requireModule(
        runtime.__mockRootPath,
        "not-a-haste-package"
      );
      expect(hastePackage.isNodeModule).toBe(true);
    }));
  it("resolves platform extensions based on the default platform", () =>
    Promise.all([
      createRuntime(__filename).then(runtime => {
        const exports = runtime.requireModule(
          runtime.__mockRootPath,
          "Platform"
        );
        expect(exports.platform).toBe("default");
      }),
      createRuntime(__filename, {
        haste: {
          defaultPlatform: "ios",
          platforms: ["ios", "android"]
        }
      }).then(runtime => {
        const exports = runtime.requireModule(
          runtime.__mockRootPath,
          "Platform"
        );
        expect(exports.platform).toBe("ios");
      }),
      createRuntime(__filename, {
        haste: {
          platforms: ["ios", "android"]
        }
      }).then(runtime => {
        const exports = runtime.requireModule(
          runtime.__mockRootPath,
          "Platform"
        );
        expect(exports.platform).toBe("default");
      }),
      createRuntime(__filename, {
        haste: {
          defaultPlatform: "android",
          platforms: ["ios", "android"]
        }
      }).then(runtime => {
        const exports = runtime.requireModule(
          runtime.__mockRootPath,
          "Platform"
        );
        expect(exports.platform).toBe("android");
      }),
      createRuntime(__filename, {
        haste: {
          defaultPlatform: "windows",
          platforms: ["ios", "android", "native", "windows"]
        }
      }).then(runtime => {
        const exports = runtime.requireModule(
          runtime.__mockRootPath,
          "Platform"
        );
        expect(exports.platform).toBe("native");
      })
    ]));
  it("finds modules encoded in UTF-8 *with BOM*", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "./utf8_with_bom.js"
      );
      expect(exports).toBe("isModuleEncodedInUTF8WithBOM");
    }));
  it("finds and loads JSON files encoded in UTF-8 *with BOM*", () =>
    createRuntime(__filename).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "./utf8_with_bom.json"
      );
      expect(exports.isJSONModuleEncodedInUTF8WithBOM).toBe(true);
    }));
}
