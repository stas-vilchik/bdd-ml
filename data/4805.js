{
  return new HasteMap(defaultConfig).build().then(({ hasteFS }) => {
    expect(hasteFS.matchFiles(/fruits/)).toEqual([
      "/fruits/__mocks__/Pear.js",
      "/fruits/banana.js",
      "/fruits/pear.js",
      "/fruits/strawberry.js"
    ]);
    expect(hasteFS.matchFiles(/__mocks__/)).toEqual([
      "/fruits/__mocks__/Pear.js"
    ]);
  });
}
