{
  const exports = runtime.requireModule(runtime.__mockRootPath, "Platform");
  expect(exports.platform).toBe("native");
}
