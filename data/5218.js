createRuntime(__filename, {
  haste: {
    providesModuleNodeModules: ["not-a-haste-package"]
  }
}).then(runtime => {
  const hastePackage = runtime.requireModule(
    runtime.__mockRootPath,
    "not-a-haste-package"
  );
  expect(hastePackage.isNodeModule).toBe(true);
});
