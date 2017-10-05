{
  const filename = "skips-constructs.test.js";
  const content = `
    it('it', () => {});
    xtest('xtest', () => {});
    xit('xit', () => {});
    it.skip('it.skip', () => {});
    test.skip('test.skip', () => {});

    xdescribe('xdescribe', () => {
      it('it', () => {});
      test('test', () => {});
    });

    describe.skip('describe.skip', () => {
      test('test', () => {});
      describe('describe', () => {
        test('test', () => {});
      });
    });
  `;
  writeFiles(TEST_DIR, {
    [filename]: content
  });
  const { stderr, status } = runJest(DIR);
  const { summary, rest } = extractSummary(stderr);
  expect(rest).toMatchSnapshot();
  expect(summary).toMatchSnapshot();
  expect(status).toBe(0);
}
