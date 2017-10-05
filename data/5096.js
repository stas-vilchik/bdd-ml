{
  beforeEach(() => {
    rootDir = path.resolve(path.dirname(__filename), "test_root");
    createRuntime = require("createRuntime");
  });
  it("uses configured moduleDirectories", () =>
    createRuntime(__filename, {
      moduleDirectories
    }).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "module_dir_module"
      );
      expect(exports).toBeDefined();
    }));
  it("resolves packages", () =>
    createRuntime(__filename, {
      moduleDirectories
    }).then(runtime => {
      const exports = runtime.requireModule(
        runtime.__mockRootPath,
        "my-module"
      );
      expect(exports.isNodeModule).toEqual(true);
    }));
  it("finds closest module from moduleDirectories", () =>
    createRuntime(__filename, {
      moduleDirectories
    }).then(runtime => {
      const exports = runtime.requireModule(
        path.join(rootDir, "subdir2", "my_module.js"),
        "module_dir_module"
      );
      expect(exports.modulePath).toEqual(
        "subdir2/module_dir/module_dir_module.js"
      );
    }));
  it("only checks the configured directories", () =>
    createRuntime(__filename, {
      moduleDirectories
    }).then(runtime => {
      expect(() => {
        runtime.requireModule(runtime.__mockRootPath, "not-a-haste-package");
      }).toThrow(
        new Error("Cannot find module 'not-a-haste-package' from 'root.js'")
      );
    }));
}
