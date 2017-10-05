{
  mockFs["/fruits/node_modules/react/react.js"] = [
    "/**",
    " * @providesModule React",
    " */",
    'const Component = require("Component");'
  ].join("\n");
  mockFs["/fruits/node_modules/fbjs/lib/flatMap.js"] = [
    "/**",
    " * @providesModule flatMap",
    " */"
  ].join("\n");
  mockFs["/fruits/node_modules/react/node_modules/fbjs/lib/mapObject.js"] = [
    "/**",
    " * @providesModule mapObject",
    " */"
  ].join("\n");
  mockFs["/fruits/node_modules/react/node_modules/dummy/merge.js"] = [
    "/**",
    " * @providesModule merge",
    " */"
  ].join("\n");
  mockFs["/fruits/node_modules/react/node_modules/merge/package.json"] = [
    "{",
    '  "name": "merge"',
    "}"
  ].join("\n");
  mockFs["/fruits/node_modules/jest/jest.js"] = [
    "/**",
    " * @providesModule Jest",
    " */",
    'const Test = require("Test");'
  ].join("\n");
  mockFs["/fruits/node_modules/fbjs2/index.js"] = [
    "/**",
    " * @providesModule fbjs2",
    " */"
  ].join("\n");
  const hasteMap = new HasteMap(
    Object.assign({}, defaultConfig, {
      mocksPattern: "/__mocks__/",
      providesModuleNodeModules: ["react", "fbjs"]
    })
  );
  return hasteMap.build().then(({ __hasteMapForTest: data }) => {
    expect(data.clocks).toEqual(mockClocks);
    expect(data.files).toEqual({
      "/fruits/__mocks__/Pear.js": ["", 32, 1, ["Melon"]],
      "/fruits/banana.js": ["Banana", 32, 1, ["Strawberry"]],
      "/fruits/node_modules/fbjs/lib/flatMap.js": ["flatMap", 32, 1, []],
      "/fruits/node_modules/react/react.js": ["React", 32, 1, ["Component"]],
      "/fruits/pear.js": ["Pear", 32, 1, ["Banana", "Strawberry"]],
      "/fruits/strawberry.js": ["Strawberry", 32, 1, []],
      "/vegetables/melon.js": ["Melon", 32, 1, []]
    });
    expect(data.map).toEqual({
      Banana: {
        [H.GENERIC_PLATFORM]: ["/fruits/banana.js", H.MODULE]
      },
      Melon: {
        [H.GENERIC_PLATFORM]: ["/vegetables/melon.js", H.MODULE]
      },
      Pear: {
        [H.GENERIC_PLATFORM]: ["/fruits/pear.js", H.MODULE]
      },
      React: {
        [H.GENERIC_PLATFORM]: ["/fruits/node_modules/react/react.js", H.MODULE]
      },
      Strawberry: {
        [H.GENERIC_PLATFORM]: ["/fruits/strawberry.js", H.MODULE]
      },
      flatMap: {
        [H.GENERIC_PLATFORM]: [
          "/fruits/node_modules/fbjs/lib/flatMap.js",
          H.MODULE
        ]
      }
    });
    expect(data.mocks).toEqual({
      Pear: "/fruits/__mocks__/Pear.js"
    });
    expect(hasteMap.read()).toEqual(data);
  });
}
