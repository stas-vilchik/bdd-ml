{
  this.global = {
    JSON,
    console: {},
    mockClearTimers: jest.genMockFn()
  };
  const globalValues = Object.assign({}, config.globals);

  for (const customGlobalKey in globalValues) {
    this.global[customGlobalKey] = globalValues[customGlobalKey];
  }
}
