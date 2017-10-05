{
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "module_dir_module"
  );
  expect(exports).toBeDefined();
}
