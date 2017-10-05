{
  expect(testRequire("../test1.android.js")).not.toThrow();
  expect(platform.extension).toBe("android.js");
}
