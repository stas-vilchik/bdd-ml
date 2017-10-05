{
  jest.resetModules();
  jest.mock("path", () => require.requireActual("path").posix);

  const normalizePathSep = require("../normalize_path_sep").default;

  expect(normalizePathSep("foo/bar/baz.js")).toEqual("foo/bar/baz.js");
}
