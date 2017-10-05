{
  const filename = "basic.test-constructs.test.js";
  const content = `
    it('it', () => {});
    test('test', () => {});

    describe('describe', () => {
      it('it', () => {});
      test('test', () => {});
    });
  `;
  writeFiles(TEST_DIR, {
    [filename]: content
  });
  const { stderr, status } = runJest(DIR);
  expect(status).toBe(0);
  const { summary, rest } = extractSummary(stderr);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
}
