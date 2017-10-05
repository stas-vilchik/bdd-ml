{
  expect(testFixturePackage.jest.testEnvironment).toEqual("node");
  const result = runJest.json("test-environment").json;
  expect(result.success).toBe(true);
  expect(result.numTotalTests).toBe(1);
}
