{
  expect(testRequire("../test1.js")).not.toThrow();
  expect(platform.extension).toBe("js");
}
