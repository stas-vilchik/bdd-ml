{
  const paths = new Set([path.resolve(__dirname, "__fixtures__/file.js")]);
  const resolved = dependencyResolver.resolveInverse(paths, filter);
  expect(resolved).toEqual([
    expect.stringContaining(
      path.join("__tests__", "__fixtures__", "file.test.js")
    )
  ]);
}
