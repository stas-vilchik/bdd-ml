{
  writeFiles(DIR, {
    ".watchmanconfig": "",
    "__tests__/a.test.js": `
      const a = require.requireActual('../a');

      test('a', () => {});
    `,
    "__tests__/b.test.js": `test('b', () => {});`,
    "a.js": `module.exports = {}`,
    "package.json": JSON.stringify({
      jest: {}
    })
  });
  let stdout;
  let stderr;
  ({ stdout, stderr } = runJest(DIR, ["--findRelatedTests", "a.js"]));
  expect(stdout).not.toMatch("No tests found");
  expect(stderr).toMatch("PASS __tests__/a.test.js");
  expect(stderr).not.toMatch("PASS __tests__/b.test.js");
  writeFiles(DIR, {
    "__tests__/a.test.js": `
      const a = jest.requireActual('../a');

      test('a', () => {});
    `
  });
  ({ stderr, stdout } = runJest(DIR, ["--findRelatedTests", "a.js"]));
  expect(stdout).not.toMatch("No tests found");
  expect(stderr).toMatch("PASS __tests__/a.test.js");
  expect(stderr).not.toMatch("PASS __tests__/b.test.js");
}
