{
  return {
    getCacheKey: jest.fn((content, filename, configStr) => "cd"),
    process: (content, filename, config) => {
      return `
          module.exports = {
            filename: ${filename},
            rawFirstLine: ${content.split("\n")[0]},
          };
        `;
    }
  };
}
