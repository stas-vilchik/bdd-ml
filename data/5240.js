{
  sync: jest.fn().mockImplementation((filePath, data) => {
    const normalizedPath = require("slash")(filePath);

    mockFs[normalizedPath] = data;
  });
}
