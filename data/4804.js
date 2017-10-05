{
  jest.resetModuleRegistry();
  HasteMap = require("../");
  expect(
    HasteMap.getCacheFilePath("/", "@scoped/package", "random-value")
  ).toMatch(/^\/-scoped-package-(.*)$/);
  expect(
    HasteMap.getCacheFilePath("/", "@scoped/package", "random-value")
  ).not.toEqual(
    HasteMap.getCacheFilePath("/", "-scoped-package", "random-value")
  );
}
