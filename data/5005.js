{
  const resolved = dependencyResolver.resolve(
    path.resolve(__dirname, "__fixtures__", "file.js")
  );
  expect(resolved).toEqual([
    expect.stringContaining("jest-resolve-dependencies"),
    expect.stringContaining("jest-regex-util")
  ]);
}
