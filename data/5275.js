{
  const { getSerializers } = require("../plugins");

  const plugins = getSerializers();
  expect(plugins.length).toBe(4);
}
