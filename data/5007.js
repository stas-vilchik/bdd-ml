{
  const paths = new Set();
  const resolved = dependencyResolver.resolveInverse(paths, filter);
  expect(resolved.length).toEqual(0);
}
