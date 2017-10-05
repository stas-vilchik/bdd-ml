{
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
}
