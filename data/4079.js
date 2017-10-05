{
  const filename = "only-constructs.test.js";
  const content = `
    it('it', () => {});
    it('it, no implementation');
    test('test, no implementation');
  `;
  writeFiles(TEST_DIR, {
    [filename]: content
  });
  const { stderr, status } = runJest(DIR, ["--expand"]);
  expect(status).toBe(0);
  const { summary, rest } = extractSummary(stderr);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
}
