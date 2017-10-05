{
  jest.resetModules();

  object = data => Object.assign(Object.create(null), data);

  mockEmitters = Object.create(null);
  mockFs = object({
    "/fruits/__mocks__/Pear.js": ['const Melon = require("Melon");'].join("\n"),
    "/fruits/banana.js": [
      "/**",
      " * @providesModule Banana",
      " */",
      'const Strawberry = require("Strawberry");'
    ].join("\n"),
    "/fruits/kiwi.js": ["/**", " * @providesModule Kiwi", " */"].join("\n"),
    "/fruits/pear.js": [
      "/**",
      " * @providesModule Pear",
      " */",
      'const Banana = require("Banana");',
      'const Strawberry = require("Strawberry");'
    ].join("\n"),
    "/fruits/strawberry.js": [
      "/**",
      " * @providesModule Strawberry",
      " */"
    ].join("\n"),
    "/vegetables/melon.js": ["/**", " * @providesModule Melon", " */"].join(
      "\n"
    )
  });
  mockClocks = object({
    "/fruits": "c:fake-clock:1",
    "/vegetables": "c:fake-clock:2"
  });
  mockChangedFiles = null;
  fs = require("graceful-fs");
  consoleWarn = console.warn;
  console.warn = jest.fn();
  HasteMap = require("../");
  H = HasteMap.H;
  getCacheFilePath = HasteMap.getCacheFilePath;
  HasteMap.getCacheFilePath = jest.fn(() => cacheFilePath);
  defaultConfig = {
    extensions: ["js", "json"],
    ignorePattern: /kiwi/,
    maxWorkers: 1,
    name: "haste-map-test",
    platforms: ["ios", "android"],
    resetCache: false,
    roots: ["/fruits", "/vegetables"],
    useWatchman: true
  };
}
