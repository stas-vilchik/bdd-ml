{
  const watchman = require("../crawlers/watchman");

  const node = require("../crawlers/node");

  watchman.mockImplementation(() =>
    Promise.reject(new Error("watchman error"))
  );
  node.mockImplementation((roots, extensions, ignore, data) =>
    Promise.reject(new Error("node error"))
  );
  return new HasteMap(defaultConfig).build().then(
    () => expect(() => {}).toThrow(),
    error => {
      expect(error.message).toEqual(
        "Crawler retry failed:\n" +
          "  Original error: watchman error\n" +
          "  Retry error: node error\n"
      );
    }
  );
}
