{
  return {
    getCacheKey: jest.fn((content, filename, configStr) => "ab"),
    process: jest.fn()
  };
}
