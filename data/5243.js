{
  jest.resetModules();

  object = data => Object.assign(Object.create(null), data);

  vm = require("vm");
  mockFs = object({
    "/fruits/banana.js": ['module.exports = "banana";'].join("\n"),
    "/fruits/grapefruit.js": [
      'module.exports = function () { return "grapefruit"; }'
    ].join("\n"),
    "/fruits/kiwi.js": ['module.exports = () => "kiwi";'].join("\n"),
    "/node_modules/react.js": ['module.exports = "react";'].join("\n"),
    "/styles/App.css": ["root {", "  font-family: Helvetica;", "}"].join("\n")
  });
  fs = require("graceful-fs");
  fs.readFileSync = jest.fn((path, options) => {
    expect(options).toBe("utf8");

    if (mockFs[path]) {
      return mockFs[path];
    }

    throw new Error(`Cannot read path '${path}'.`);
  });
  fs.writeFileSync = jest.fn((path, data, options) => {
    expect(options).toBe("utf8");
    const normalizedPath = slash(path);
    mockFs[normalizedPath] = data;
  });
  fs.unlinkSync = jest.fn();
  fs.statSync = jest.fn(path => ({
    isFile: () => !!mockFs[path],
    mtime: {
      getTime: () => 42
    }
  }));
  fs.existsSync = jest.fn(path => !!mockFs[path]);
  writeFileAtomic = require("write-file-atomic");
  config = {
    cache: true,
    cacheDirectory: "/cache/",
    name: "test",
    rootDir: "/",
    transformIgnorePatterns: ["/node_modules/"]
  };
  ScriptTransformer = require("../script_transformer").default;
}
