{
  expect(testRequire("../test1")).not.toThrow();
  expect(platform.extension).toBe("android.js");
}
