{
  const escapeStrings = str => {
    return str.replace(/'/, `'`);
  };

  return {
    getCacheKey: jest.fn((content, filename, configStr) => "ab"),
    process: (content, filename, config) => {
      return `
          const TRANSFORMED = {
            filename: '${escapeStrings(filename)}',
            script: '${escapeStrings(content)}',
            config: '${escapeStrings(JSON.stringify(config))}',
          };
        `;
    }
  };
}
