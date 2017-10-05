{
  expect(testRequire("../test1.native.js")).not.toThrow();
  expect(platform.extension).toBe("native.js");
}
