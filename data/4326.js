{
  expect(testRequire("custom-resolve/test1")).not.toThrow();
  expect(platform.extension).toBe("android.js");
}
