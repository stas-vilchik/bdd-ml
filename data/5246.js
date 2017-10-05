{
  expect(options).toBe("utf8");
  const normalizedPath = slash(path);
  mockFs[normalizedPath] = data;
}
