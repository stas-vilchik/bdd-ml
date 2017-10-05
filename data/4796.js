{
  readFileSync: jest.fn((path, options) => {
    expect(options).toBe('utf8');

    if (mockChangedFiles && path in mockChangedFiles) {
      return mockChangedFiles[path];
    }

    if (mockFs[path]) {
      return mockFs[path];
    }

    const error = new Error(`Cannot read path '${path}'.`);
    error.code = 'ENOENT';
    throw error;
  }),
  writeFileSync: jest.fn((path, data, options) => {
    expect(options).toBe('utf8');
    mockFs[path] = data;
  })
}