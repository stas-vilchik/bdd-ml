{
  expect(options).toBe("utf8");

  if (mockChangedFiles && path in mockChangedFiles) {
    return mockChangedFiles[path];
  }

  if (mockFs[path]) {
    return mockFs[path];
  }

  const error = new Error(`Cannot read path '${path}'.`);
  error.code = "ENOENT";
  throw error;
}
