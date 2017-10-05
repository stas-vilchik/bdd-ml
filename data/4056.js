{
  writeFiles(DIR, {
    "__tests__/test.test.js": `test('test', () => {});`,
    "package.json": JSON.stringify({
      jest: {
        reporters: ["default", "<rootDir>/reporter.js"],
        testEnvironment: "node"
      }
    }),
    "reporter.js": `
        'use strict';
        module.exports = class Reporter {
          onRunStart() {
            throw new Error('ON_RUN_START_ERROR');
          }
        };
      `
  });
  const { stderr, status } = runJest(DIR);
  expect(stderr).toMatch(/ON_RUN_START_ERROR/);
  expect(status).toBe(1);
}
