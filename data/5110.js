{
  const nodePath = __dirname + "/NODE_PATH_dir";
  return createLocalRuntime(nodePath).then(runtime => {
    const exports = runtime.requireModuleOrMock(
      runtime.__mockRootPath,
      "regular_module_in_node_path"
    );
    expect(exports).toBeDefined();
  });
}
