{
  expect(options).toBe("utf8");

  if (mockFs[path]) {
    return mockFs[path];
  }

  throw new Error(`Cannot read path '${path}'.`);
}
