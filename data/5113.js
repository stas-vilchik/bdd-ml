{
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "regular_module_in_node_path"
  );
  expect(exports).toBeDefined();
}
