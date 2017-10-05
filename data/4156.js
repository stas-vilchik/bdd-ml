{
  writeFiles(DIR, {
    "__tests__/test.test.js": `test('test', () => { expect(1).toBe(2); });`,
    "package.json": JSON.stringify({
      jest: {
        testEnvironment: "node",
        testFailureExitCode: 99
      }
    })
  });
  let { status } = runJest(DIR);
  expect(status).toBe(99);
  ({ status } = runJest(DIR, ["--testFailureExitCode", "77"]));
  expect(status).toBe(77);
  writeFiles(DIR, {
    "__tests__/test.test.js": `test('test', () => { expect(1).toBe(2); });`,
    "package.json": JSON.stringify({
      jest: {
        testEnvironment: "node"
      }
    })
  });
  ({ status } = runJest(DIR));
  expect(status).toBe(1);
}
