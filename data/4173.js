{
  const filename = "cannot-be-used-with-not.test.js";
  const template = makeTemplate(`test('cannot be used with .not', () => {
       expect('').not.toThrowErrorMatchingSnapshot();
    });
    `);
  {
    writeFiles(TESTS_DIR, {
      [filename]: template()
    });
    const { stderr, status } = runJest(DIR, ["-w=1", "--ci=false", filename]);
    expect(stderr).toMatch(
      "Jest: `.not` cannot be used with `.toThrowErrorMatchingSnapshot()`."
    );
    expect(status).toBe(1);
  }
}
