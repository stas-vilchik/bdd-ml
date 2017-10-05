{
  expect(() => {
    runtime.requireModuleOrMock(
      runtime.__mockRootPath,
      "regular_module_in_node_path"
    );
  }).toThrow(
    new Error(`Cannot find module 'regular_module_in_node_path' from 'root.js'`)
  );
}
