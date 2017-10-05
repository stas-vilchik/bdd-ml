{
  const filename = "throws-if-tested-function-did-not-throw.test.js";
  const template = makeTemplate(`test('throws the error if tested function did not throw error', () => {
      expect(() => {}).toThrowErrorMatchingSnapshot();
    });
    `);
  {
    writeFiles(TESTS_DIR, {
      [filename]: template()
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch(`Expected the function to throw an error.`);
    expect(status).toBe(1);
  }
}
