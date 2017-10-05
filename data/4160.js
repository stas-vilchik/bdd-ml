{
  writeFiles(DIR, {
    "__tests__/a-banana.js": `
      jest.setTimeout(20);

      test('banana', () => {
        return new Promise(resolve => {
          setTimeout(resolve, 100);
        });
      });
    `,
    "package.json": "{}"
  });
  const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false"]);
  const { rest, summary } = extractSummary(stderr);
  expect(rest).toMatch(/(jasmine\.DEFAULT_TIMEOUT_INTERVAL|Exceeded timeout)/);
  expect(summary).toMatchSnapshot();
  expect(status).toBe(1);
}
