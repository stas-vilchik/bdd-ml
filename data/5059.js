{
  it("loads modules and applies transforms", () =>
    createRuntime(__filename, {
      transform: {
        "^.+\\.js$": "./test_preprocessor"
      }
    }).then(runtime => {
      const modulePath = path.resolve(
        path.dirname(runtime.__mockRootPath),
        "internal-root.js"
      );
      expect(() => {
        runtime.requireModule(modulePath);
      }).toThrow(new Error("preprocessor must not run."));
    }));
  it("loads internal modules without applying transforms", () =>
    createRuntime(__filename, {
      transform: {
        "^.+\\.js$": "./test_preprocessor"
      }
    }).then(runtime => {
      const modulePath = path.resolve(
        path.dirname(runtime.__mockRootPath),
        "internal-root.js"
      );
      const exports = runtime.requireInternalModule(modulePath);
      expect(exports()).toBe("internal-module-data");
    }));
}
