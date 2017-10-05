{
  mockFs = Object.create(null);
  mockFs["/fruits/strawberry.js"] = [
    "/**",
    " * @providesModule Strawberry",
    " */",
    'const Banana = require("Banana");'
  ].join("\n");
  mockFs["/fruits/strawberry.ios.js"] = [
    "/**",
    " * @providesModule Strawberry",
    " */",
    'const Raspberry = require("Raspberry");'
  ].join("\n");
  mockFs["/fruits/strawberry.android.js"] = [
    "/**",
    " * @providesModule Strawberry",
    " */",
    'const Blackberry = require("Blackberry");'
  ].join("\n");
  return new HasteMap(defaultConfig)
    .build()
    .then(({ __hasteMapForTest: data }) => {
      expect(data.files).toEqual({
        "/fruits/strawberry.android.js": ["Strawberry", 32, 1, ["Blackberry"]],
        "/fruits/strawberry.ios.js": ["Strawberry", 32, 1, ["Raspberry"]],
        "/fruits/strawberry.js": ["Strawberry", 32, 1, ["Banana"]]
      });
      expect(data.map).toEqual({
        Strawberry: {
          [H.GENERIC_PLATFORM]: ["/fruits/strawberry.js", H.MODULE],
          android: ["/fruits/strawberry.android.js", H.MODULE],
          ios: ["/fruits/strawberry.ios.js", H.MODULE]
        }
      });
    });
}
