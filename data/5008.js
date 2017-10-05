{
  const paths = new Set(["/non/existent/path", "/another/one"]);
  const resolved = dependencyResolver.resolveInverse(paths, filter);
  expect(resolved.length).toEqual(0);
}
