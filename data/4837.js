{
  const watchman = require("../crawlers/watchman");

  const node = require("../crawlers/node");

  watchman.mockImplementation(() => {
    throw new Error("watchman error");
  });
  node.mockImplementation(options => {
    const { data } = options;
    data.files = object({
      "/fruits/banana.js": ["", 32, 0, []]
    });
    return Promise.resolve(data);
  });
  return new HasteMap(defaultConfig)
    .build()
    .then(({ __hasteMapForTest: data }) => {
      expect(watchman).toBeCalled();
      expect(node).toBeCalled();
      expect(data.files).toEqual({
        "/fruits/banana.js": ["Banana", 32, 1, ["Strawberry"]]
      });
      expect(console.warn.mock.calls[0][0]).toMatchSnapshot();
    });
}
