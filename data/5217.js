{
  const hastePackage = runtime.requireModule(
    runtime.__mockRootPath,
    "haste-package/core/module"
  );
  expect(hastePackage.isHastePackage).toBe(true);
}
