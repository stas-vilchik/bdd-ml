{
  expect(testRequire("../test3")).not.toThrow();
  expect(platform.extension).toBe("js");
}
