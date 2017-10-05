{
  const resolved = dependencyResolver.resolve(
    path.resolve(__dirname, "__fixtures__", "scoped.js")
  );
  expect(resolved).toEqual([
    expect.stringContaining(path.join("@myorg", "pkg"))
  ]);
}
