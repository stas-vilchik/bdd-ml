{
  process.env.NODE_PATH = nodePath;

  const createRuntime = require("createRuntime");

  return createRuntime(__filename, config);
}
