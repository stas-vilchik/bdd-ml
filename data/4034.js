{
  writeFiles(DIR, {
    "__tests__/a-banana.js": `
      test('banana', () => console.log('Hey'));
    `,
    "package.json": "{}"
  });
  const { stderr, stdout, status } = runJest(DIR, [
    "-i",
    "--ci=false",
    "--forceExit"
  ]);
  const { rest, summary } = extractSummary(stderr);
  expect(status).toBe(0);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
  expect(stdout).toMatchSnapshot();
}
