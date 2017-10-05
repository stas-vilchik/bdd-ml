{
  expect(testRequire("../test2")).not.toThrow();
  expect(platform.extension).toBe("native.js");
}
