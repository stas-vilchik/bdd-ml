{
  const filename = "only-constructs.test.js";
  const content = `
    it('it', () => {});
    test.only('test.only', () => {});
    it.only('it.only', () => {});
    fit('fit', () => {});

    fdescribe('fdescribe', () => {
      it('it', () => {});
      test('test', () => {});
    });

    describe.only('describe.only', () => {
      test('test', () => {});
      describe('describe', () => {
        test('test', () => {});
      });
    });
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
