{
  mockFs["/fruits/raspberry.js"] = [
    "/**",
    " * @providesModule Strawberry",
    " */",
    'const Banana = require("Banana");'
  ].join("\n");
  return new HasteMap(defaultConfig)
    .build()
    .then(({ __hasteMapForTest: data }) => {
      expect(data.map.Strawberry[H.GENERIC_PLATFORM]).not.toBeDefined();
      expect(console.warn.mock.calls[0][0]).toMatchSnapshot();
    });
}
