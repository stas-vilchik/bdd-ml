{
  expect(testRequire("../test1.json")).not.toThrow();
  expect(platform.extension).toBe("json");
}
