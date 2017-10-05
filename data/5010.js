{
  const paths = new Set([
    path.resolve(__dirname, "__fixtures__/file.js"),
    path.resolve(__dirname, "__fixtures__/__snapshots__/related.test.js.snap")
  ]);
  const resolved = dependencyResolver.resolveInverse(paths, filter);
  expect(resolved).toEqual(
    expect.arrayContaining([
      expect.stringContaining(
        path.join("__tests__", "__fixtures__", "file.test.js")
      ),
      expect.stringContaining(
        path.join("__tests__", "__fixtures__", "related.test.js")
      )
    ])
  );
}
