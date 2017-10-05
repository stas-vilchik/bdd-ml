{
  writeFiles(DIR, {
    "__tests__/a-banana.js": `
    test('banana', () => expect(1).toBe(1));
    test('abc', () => console.log(process.cwd()));
    `,
    "jest.config.js": `module.exports = {testRegex: '.*-banana.js'};`,
    "package.json": "{}",
    "some/nested/directory/file.js": "// nothing special"
  });
  const { stderr, status, stdout } = runJest(
    path.join(DIR, "some", "nested", "directory"),
    ["-w=1", "--ci=false"],
    {
      skipPkgJsonCheck: true
    }
  );
  expect(
    stdout.replace(/^\W+(.*)integration_tests/gm, "<<REPLACED>>")
  ).toMatchSnapshot();
  const { rest, summary } = extractSummary(stderr);
  expect(status).toBe(0);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
}
