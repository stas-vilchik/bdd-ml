{
  const watchman = require("../crawlers/watchman");

  const mockImpl = watchman.getMockImplementation();
  watchman.mockImplementation(options => {
    return mockImpl(options).then(() => {
      const { data } = options;
      data.files["/fruits/invalid/file.js"] = ["", 34, 0, []];
      return data;
    });
  });
  return new HasteMap(defaultConfig)
    .build()
    .then(({ __hasteMapForTest: data }) => {
      expect(Object.keys(data.files).length).toBe(5);
      expect(data.files["/fruits/invalid/file.js"]).toBe(undefined);
    });
}
