{
  const pkgJson = {
    jest: {
      collectCoverage: true,
      collectCoverageFrom: ["**/*.js"],
      coverageThreshold: {
        global: {
          lines: 90
        }
      }
    }
  };
  writeFiles(DIR, {
    "__tests__/a-banana.js": `
      require('../not-covered.js');
      test('banana', () => expect(1).toBe(1));
    `,
    "not-covered.js": `
      module.exports = () => {
        return 1 + 2;
      };
    `,
    "package.json": JSON.stringify(pkgJson, null, 2)
  });
  const { stdout, status } = runJest(DIR, ["--coverage", "--ci=false"]);
  expect(status).toBe(1);
  expect(stdout).toMatchSnapshot();
}
