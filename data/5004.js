{
  const resolved = dependencyResolver.resolve("/non/existent/path");
  expect(resolved.length).toEqual(0);
}
