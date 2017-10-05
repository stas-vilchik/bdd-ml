{
  writeFiles(DIR, {
    "__tests__/a-banana.js": `test('banana', () => expect(1).toBe(1));`,
    "package.json": JSON.stringify({
      jest: {
        testEnvironment: "node"
      }
    })
  });
  const { stderr } = runJest(DIR, ["--logHeapUsage"]);
  expect(stderr).toMatch(/PASS\s__tests__\/a-banana.js.*\d+ MB heap size/);
}
