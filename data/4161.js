{
  writeFiles(DIR, {
    "__tests__/a-banana.js": `
      jest.setTimeout(100);

      test('banana', () => {
        return new Promise(resolve => {
          setTimeout(resolve, 20);
        });
      });
    `,
    "package.json": "{}"
  });
  const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false"]);
  const { rest, summary } = extractSummary(stderr);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
  expect(status).toBe(0);
}
