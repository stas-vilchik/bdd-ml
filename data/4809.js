{
  mockFs["/fruits/node_modules/fbjs/index.js"] = [
    "/**",
    " * @providesModule fbjs",
    " */"
  ].join("\n");
  const hasteMap = new HasteMap(
    Object.assign({}, defaultConfig, {
      mocksPattern: "/__mocks__/",
      retainAllFiles: true
    })
  );
  return hasteMap.build().then(({ __hasteMapForTest: data }) => {
    expect(data.files["/fruits/node_modules/fbjs/index.js"]).toEqual([
      "",
      32,
      0,
      []
    ]);
    expect(data.map.fbjs).not.toBeDefined();
    expect(fs.readFileSync.mock.calls.length).toBe(6);
  });
}
