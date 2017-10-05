{
  const filename = "works-fine-when-function-throws-error.test.js";
  const template = makeTemplate(`test('works fine when function throws error', () => {
       expect(() => { throw new Error('apple'); })
         .toThrowErrorMatchingSnapshot();
    });
    `);
  {
    writeFiles(TESTS_DIR, {
      [filename]: template()
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch("1 snapshot written in 1 test suite.");
    expect(status).toBe(0);
  }
}
