{
  writeFiles(DIR, {
    "__tests__/a-banana.js": `test('banana', () => expect(1).toBe(1));`,
    "jest.config.js": `module.exports = {testRegex: '.*-banana.js'};`,
    "package.json": "{}"
  });
  const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false"]);
  const { rest, summary } = extractSummary(stderr);
  expect(status).toBe(0);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
}
