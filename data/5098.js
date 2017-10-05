createRuntime(__filename, {
  moduleDirectories
}).then(runtime => {
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "module_dir_module"
  );
  expect(exports).toBeDefined();
});
