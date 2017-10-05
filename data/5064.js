{
  const modulePath = path.resolve(
    path.dirname(runtime.__mockRootPath),
    "internal-root.js"
  );
  const exports = runtime.requireInternalModule(modulePath);
  expect(exports()).toBe("internal-module-data");
}
