{
  const exports = runtime.requireModule(
    path.join(rootDir, "subdir2", "my_module.js"),
    "module_dir_module"
  );
  expect(exports.modulePath).toEqual("subdir2/module_dir/module_dir_module.js");
}
