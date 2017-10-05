{
  expect(testRequire("../test4")).not.toThrow();
  expect(platform.extension).toBe("json");
}
