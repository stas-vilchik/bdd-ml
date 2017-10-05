{
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "RegularModule"
  );
  expect(exports.paths.length).toBeGreaterThan(0);
  exports.paths.forEach(path => {
    expect(moduleDirectories.some(dir => path.endsWith(dir))).toBe(true);
  });
}
