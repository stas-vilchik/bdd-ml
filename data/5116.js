{
  const nodePath =
    cwd.substr(path.sep.length) + "src/Runtime/__tests__/NODE_PATH_dir";
  return createLocalRuntime(nodePath).then(runtime => {
    expect(() => {
      runtime.requireModuleOrMock(
        runtime.__mockRootPath,
        "regular_module_in_node_path"
      );
    }).toThrow(
      new Error(
        `Cannot find module 'regular_module_in_node_path' from 'root.js'`
      )
    );
  });
}
