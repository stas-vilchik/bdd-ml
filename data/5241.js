{
  const normalizedPath = require("slash")(filePath);

  mockFs[normalizedPath] = data;
}
